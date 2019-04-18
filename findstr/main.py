# -*- coding : utf-8 -*-
#coding='unicode_escape'
import os, os.path
import threading
import sys
import docx

def search(path, str):
    for x in os.listdir(path):
       fp = os.path.join(path, x)
       if os.path.isfile(fp):
          if fp.endswith('.docx'):
              doc = docx.Document(filename[:-4]+".docx")
          with open(fp, 'r') as fc:
             for line in fc.readlines():
               if str in line:
                 print u'关键字:' + str + ' ==>> ' + fp + '\r\n'
                 break
       elif os.path.isdir(fp):
          search(fp, str)

if len(sys.argv) >= 3:
   for ind in range(0,len(sys.argv)):
       if ind > 1:
        #  print '开始搜索:' + sys.argv[ind]
         threading.Thread(target=search,args=(sys.argv[1], sys.argv[ind])).start()
         # threading.Thread(target=search,args=('C:\Users\Administrator\Desktop\finder', 'java')).start()

else:
   print 'parameters not match'
