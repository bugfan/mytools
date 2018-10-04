#!/usr/bin/python
#-*- coding: utf8 -*-
from Tkinter import *
from tkMessageBox import *
import const
import json
import threading
import urllib
import urllib2
import os
import sys
import time
from PIL import Image
from PIL import ImageTk
from urllib2 import urlopen
import io
# 跨平台的进程库

# import zipfile
# import socket,shutil


class MyApp(object):
    """"""

    def __init__(self, parent):
        self.root = parent
        self.run = False
        Label(self.root, text='手机号:').grid(row=0, column=0, sticky=W)
        Label(self.root, text='密  码:').grid(row=1, column=0, sticky=W)
        v1 = StringVar()
        v2 = StringVar()
        chVarDis = IntVar()  # 复选按钮
        # 拿信息
        try:
            hei = open("hei.ini", 'r')
            heis = hei.readline()
            hei.close()
            print heis
            strs = heis.split(':')
            if len(strs) == 2:
                v1.set(strs[0])
                v2.set(strs[1])
                chVarDis.set(1)
        except IOError:
            print '没有密码'
        check1 = Checkbutton(self.root, text="记住密码", command=lambda: self.rem(chVarDis, v2),
                             variable=chVarDis).grid(column=2, row=1)
        e1 = Entry(self.root, textvariable=v1, validate='focusout',
                   validatecommand=vali)  # 可以执行多个函数
        e2 = Entry(self.root, textvariable=v2, show='*')
        e1.grid(row=0, column=1, padx=10, pady=5, sticky=W)
        e2.grid(row=1, column=1, padx=10, pady=5, sticky=W)
        Button(self.root, text="登出", width=10, command=lambda: self.logout(
            v1, v2)).grid(row=1, column=3, padx=10, pady=5, sticky=W)
        Button(self.root, text="登录", width=10, command=lambda: self.login(
            v1, v2, chVarDis)).grid(row=0, column=3, padx=10, pady=5, sticky=W)

        # Button(self.root, text="test", width=10, command=self.openFrame).grid(
        #     row=3, column=1, sticky=S, padx=10, pady=5)
    def rem(self, v, v2):
        if v.get() == 0:
            hei = open("hei.ini", 'w+')
            hei.close()
            v2.set('')

    def hide(self):
        """隐藏自己"""
        self.root.withdraw()

    def openFrame(self, tmp, sr, self2):
        """"""
        # self.hide()
        meiyue = self.root
        # meiyue = Toplevel(self.root)
        # meiyue.resizable(0, 0)
        # meiyue.title('美约交友')
        # Popup.attributes("-toolwindow", 1)
        # Popup.wm_attributes("-topmost", 1)
        Label(meiyue, text='昵称:').grid(row=4, column=0, sticky=W)
        p_nickname = StringVar()
        p_nickname.set(tmp.get('data').get('profile').get('nickname'))
        Label(meiyue, textvariable=p_nickname).grid(row=4, column=1, sticky=W)

        url = "http://oiogxl80p.bkt.clouddn.com/"+tmp.get('data').get('profile').get('headurl')
        image_bytes = urlopen(url).read()
        data_stream = io.BytesIO(image_bytes)
        pil_image = Image.open(data_stream)
        # w, h = pil_image.size
        # fname = url.split('/')[-1]
        # sf = "{} ({}x{})".format(fname, w, h)
        tk_image = ImageTk.PhotoImage(pil_image)
        # 增加合并单元格 头像
        Button(meiyue, text="头像", image=tk_image,bg='brown',width=60,height=70).grid(row=3, column=0, columnspan=1, rowspan=1, sticky=W+E, padx=2)


        Label(meiyue, text='用户ID:').grid(row=4, column=2, sticky=W)
        p_userid = StringVar()
        p_userid.set(tmp.get('data').get('id'))
        Label(meiyue, textvariable=p_userid).grid(row=4, column=3, sticky=W)
        Label(meiyue, text='钻石:').grid(row=5, column=0, sticky=W)
        p_diamond = StringVar()
        p_rich = StringVar()
        # p_diamond.set(get_diamond(tmp.get('data').get('id')))
        threading.Thread(target=get_fresh, args=(tmp.get('data').get('id'), tmp.get(
            'data').get('authtoken'), p_rich, p_diamond, self2)).start()

        Label(meiyue, textvariable=p_diamond).grid(row=5, column=1, sticky=W)
        Label(meiyue, text='土豪值:').grid(row=5, column=2, sticky=W)
        p_rich.set(tmp.get('data').get('score').get('richval'))
        Label(meiyue, textvariable=p_rich).grid(row=5, column=3, sticky=W)

        Label(meiyue, text='性别:').grid(row=6, column=0, sticky=W)
        p_sex = StringVar()
        if tmp.get('data').get('profile').get('sex') == 1:
            p_sex.set('男')
        else:
            p_sex.set('女')

        Label(meiyue, textvariable=p_sex).grid(row=6, column=1, sticky=W)
        Label(meiyue, text='平台:').grid(row=6, column=2, sticky=W)
        p_platformchannel = StringVar()
        p_platformchannel.set(tmp.get('data').get('platformchannel'))
        Label(meiyue, textvariable=p_platformchannel).grid(row=6, column=3, sticky=W)

        mic = StringVar()
        devid = StringVar()
        bagaddr = StringVar()

        gcs = StringVar()
        gcsgameid = StringVar()
        gcsbagaddr = StringVar()

        pdx = StringVar()
        pdxdevid = StringVar()
        pdxsave = StringVar()
        pdxbagaddr = StringVar()
        # 单独写值
        give_value(tmp.get('data').get('id'), tmp.get(
            'data').get('authtoken'),mic,devid,bagaddr,gcs,gcsgameid,gcsbagaddr,pdx,pdxdevid,pdxsave,pdxbagaddr)

        Label(meiyue, text='MIC美克:').grid(row=7, column=0, sticky=W)
        Label(meiyue, textvariable=mic).grid(
            row=7, column=1, columnspan=5, sticky=W)
        Label(meiyue, text='手环设备ID:').grid(row=8, column=0, sticky=W)
        Label(meiyue, textvariable=devid).grid(
            row=8, column=1, columnspan=5, sticky=W)
        Label(meiyue, text='美克钱包地址:').grid(row=9, column=0, sticky=W)
        Label(meiyue, textvariable=bagaddr).grid(
            row=9, column=1, columnspan=5, sticky=W)
        Label(meiyue, text='').grid(
            row=10, column=0, sticky=W)
        Label(meiyue, textvariable='').grid(
            row=10, column=1, columnspan=5, sticky=W)
        Label(meiyue, text='GCS宝克:').grid(
            row=11, column=0, sticky=W)
        Label(meiyue, textvariable=gcs).grid(
            row=11, column=1, columnspan=5, sticky=W)
        Label(meiyue, text='宝克游戏盒设备ID:').grid(
            row=12, column=0, sticky=W)
        Label(meiyue, textvariable=gcsgameid).grid(
            row=12, column=1, columnspan=5, sticky=W)
        Label(meiyue, text='GCS钱包地址:').grid(
            row=13, column=0, sticky=W)
        Label(meiyue, textvariable=gcsbagaddr).grid(
            row=13, column=1, columnspan=5, sticky=W)
        Label(meiyue, text='').grid(
            row=14, column=0, columnspan=5, sticky=W)
        Label(meiyue, text='').grid(
            row=14, column=1, columnspan=5, sticky=W)
        Label(meiyue, text='PDX潘多拉:').grid(
            row=15, column=0, sticky=W)
        Label(meiyue, textvariable=pdx).grid(
            row=15, column=1, columnspan=5, sticky=W)
        Label(meiyue, text='潘多拉云存储设备ID:').grid(
            row=16, column=0, sticky=W)
        Label(meiyue, textvariable=pdxdevid).grid(
            row=16, column=1, columnspan=5, sticky=W)
        Label(meiyue, text='存储空间:').grid(
            row=17, column=0, sticky=W)
        Label(meiyue, textvariable=pdxsave).grid(
            row=17, column=1, columnspan=5, sticky=W)
        Label(meiyue, text='PDX钱包地址:').grid(
            row=18, column=0, sticky=W)
        Label(meiyue, textvariable=pdxbagaddr).grid(
            row=18, column=1, columnspan=5, sticky=W)
        
    def logout(self, v1, v2):
        print "logout"
        v1.set('')
        v2.set('')
        self.run=False
        # self.root.destroy()

    def login(self, v1, v2, v3):
        if self.run == False:
            phone = v1.get()
            pwd = v2.get()
            if isNull(phone, pwd) != '':
                showinfo('提示', isNull(phone, pwd))
            values = {'phone': ''+phone, 'password': ''+pwd}
            data = json.JSONEncoder().encode(values)
            # print data
            requrl = const.URL_login
            req = urllib2.Request(url=requrl, data=data)
            # print req
            res_data = urllib2.urlopen(req)
            res = res_data.read()
            tmp = json.loads(res)
            # pro = tmp.get('data').get('authtoken')
            if tmp.get('status') == 200:
                if v3.get() == 1:
                    hei = open("hei.ini", 'w+')
                    hei.write(phone+':'+pwd)
                    hei.close()
                self.run = True
                self.openFrame(tmp, self.root, self)
            else:
                print "登录失败"
                showinfo('登录失败', '帐号密码错误')
        else:
            showwarning('提示', '你已经登录')


def vali():
    print "验证数字"


def get_fresh(uid, token, p_r, p_d, sta):
    while True:
        values = {'userid': str(uid), 'toview': '1'}
        data = json.JSONEncoder().encode(values)
        # headers = {'AuthToken':}
        # print data
        requrl = const.URL_query_profile
        req = urllib2.Request(url=requrl, headers={
                              'AuthToken': token}, data=data)
        res_data = urllib2.urlopen(req)
        pro = json.loads(res_data.read())
        if pro.get('status') != 200:
            showinfo('被顶下线', '别人登录啦，或者过期,重新登录吧')
            sta.run = False
            break
        print '请求金额OK:'
        print pro.get('data').get('profile')
        p_d.set(pro.get('data').get('score').get('diamondval'))
        p_r.set(pro.get('data').get('score').get('richval'))
        time.sleep(3)

#
def give_value(uid,token,* arg):
    print "此函数去拿新增数据"
    for v in arg:
        v.set('AB测试CDio998778nnj0d9f89877fdsfnj')

def isNum(v):
    return v.isdigit()


def isNull(k, v):
    if k == '':
        return '请输入账号'
    else:
        if isNum(k) == False:
            return '请输入数字'
    if v == '':
        return '请输入密码'
    return ''


if __name__ == '__main__':
    root = Tk()
    root.title('美约')
    root.resizable(0, 0)
    myapp = MyApp(root)
    root.mainloop()
