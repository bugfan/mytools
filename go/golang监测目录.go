package api

import (
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"time"

	"github.com/RichCache/themis/hostmapping"
	"github.com/RichCache/themis/utils"
	"github.com/howeyc/fsnotify"
)

const (
	FILE_POST_GROUP_MAPS  = "/group_maps.json"
	FILE_POST_USER_GROUPS = "/user_groups.json"
)

var (
	monitorDir string = "/home/zhao/config"
)

func init() {
	if !isExist(monitorDir) {
		os.MkdirAll(monitorDir, 0666)
	}
}
func isExist(path string) bool {
	_, err := os.Stat(path)
	if err != nil {
		if os.IsExist(err) {
			return true
		}
		if os.IsNotExist(err) {
			return false
		}
		fmt.Println(err)
		return false
	}
	return true
}

func getPath(n string) string {
	return monitorDir + n
}
func APIMonitoring() {
	time.Sleep(5 * time.Second)
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		log.Fatal(err)
	}
	// Process events
	go func() {
		for {
			select {
			case ev := <-watcher.Event:
				if ev.IsCreate() {
					log.Println("event:", ev.Name, ev)
					switch ev.Name {
					case getPath(FILE_POST_GROUP_MAPS):
						data, err := ioutil.ReadFile(ev.Name)
						if err == nil {
							fmt.Println("PostGroupMaps2:", PostGroupMaps2(data))
						}
					case getPath(FILE_POST_USER_GROUPS):
						data, err := ioutil.ReadFile(ev.Name)
						if err == nil {
							fmt.Println("PostUserGroups2:", PostUserGroups2(data))
						}
					default:
					}
				}

			case err := <-watcher.Error:
				log.Println("watcher error:", err)
			}
		}
	}()

	err = watcher.Watch(monitorDir)
	if err != nil {
		log.Fatal(err)
	}
	<-(chan int)(nil)
	/* ... do stuff ... */
	watcher.Close()
}

func PostGroupMaps2(data []byte) error {
	post := make(map[int]*hostmapping.GroupSite)
	err := utils.NewIJSON().Unmarshal(data, &post)
	if err != nil {
		return err
	}
	hostmapping.UpdateGroupSite(post)
	return nil
}
func PostUserGroups2(data []byte) error {
	post := new(hostmapping.UserGroup)
	err := utils.NewIJSON().Unmarshal(data, &post)
	if err != nil {
		return err
	}
	err = hostmapping.UpdateUserGroup(post)
	if err == hostmapping.ErrGroupsNotExists {
		return err //errors.New("300 user group not exist")
	}
	return nil
}
