### 监听linux fifo

```
#!/bin/bash

pool_fifo="./etc/config/pool_channel"

if [ ! -p ${pool_fifo} ]; then
    rm -rf ${pool_fifo}
    mkfifo ${pool_fifo}
fi

while true
do
    read msg < ${pool_fifo}
    echo $msg
done
```
