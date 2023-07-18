#include <stdio.h>
#include <dlfcn.h>

typedef int (*AddFunction)(int, int);  // 定义函数指针类型

int main() {
    void* handle = dlopen("./add.so", RTLD_LAZY);  // 加载共享库
    if (!handle) {
        fprintf(stderr, "无法加载共享库: %s\n", dlerror());
        return 1;
    }

    AddFunction add = (AddFunction)dlsym(handle, "add");  // 获取函数指针
    if (!add) {
        fprintf(stderr, "无法获取函数指针: %s\n", dlerror());
        return 1;
    }

    int result = add(3, 4);  // 调用函数
    printf("Result: %d\n", result);

    dlclose(handle);  // 关闭共享库
    return 0;
}
