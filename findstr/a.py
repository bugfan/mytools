# -*- coding : utf-8 -*-
# coding: utf-8

import os, os.path
import sys
import threading


def search(path, str):
    for x in os.listdir(path):
        fp = os.path.join(path, x)
        try:       
            if os.path.isfile(fp):
                with open(fp, 'r') as fc:
                    for line in fc.readlines():
                        if str in line:
                            print 'keyword:',str,'  -------------->  ',fp
                            break
            elif os.path.isdir(fp):
                search(fp, str)
        except:
            print('catched ~~')

if len(sys.argv) >= 3:
   for ind in range(0,len(sys.argv)):
       if ind > 1:
         threading.Thread(target=search,args=(sys.argv[1], sys.argv[ind])).start()
         # threading.Thread(target=search,args=('C:\Users\Administrator\Desktop\finder', 'java')).start()
         # 草

else:
   print('parameters not match')
