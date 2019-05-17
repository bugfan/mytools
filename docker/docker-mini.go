package main

import (
	"fmt"
	"os"
	"os/exec"
	"path"
	"syscall"
)

const PWD = "/root/project/mycontainer"

var mergedDir = path.Join(PWD, "mount")

func main() {
	switch os.Args[1] {
	case "run":
		run()
	case "child":
		child()
	default:
		fmt.Println("usage blabla")
	}
}

func mountRoot() {
	lowerDir := path.Join(PWD, "basefs")
	upperDir := path.Join(PWD, "upper")
	workDir := path.Join(PWD, "work")

	opts := fmt.Sprintf("lowerdir=%s,upperdir=%s,workdir=%s", lowerDir, upperDir, workDir)
	syscall.Mount("overlay", mergedDir, "overlay", 0, opts)
}

func run() {
	cmd := exec.Command("/proc/self/exe", append([]string{"child"}, os.Args[2:]...)...)
	cmd.Stdin = os.Stdin
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	cmd.SysProcAttr = &syscall.SysProcAttr{
		Cloneflags:   syscall.CLONE_NEWUTS | syscall.CLONE_NEWPID | syscall.CLONE_NEWNS,
		Unshareflags: syscall.CLONE_NEWNS,
	}
	cmd.Run()
}

func child() {
	mountRoot()
	syscall.Chroot(mergedDir)
	os.Chdir("/")
	syscall.Mount("proc", "/proc", "proc", 0, "")
	cmd := exec.Command(os.Args[2], os.Args[3:]...)
	cmd.Stdin = os.Stdin
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	cmd.Run()
}
