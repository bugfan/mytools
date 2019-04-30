from wxpy import *
import math
import PIL.Image as Image
import os
import sys
import shutil
#
## 获取文件所在的绝对路径
def get_dir(sys_arg):
	sys_arg = sys_arg.split("/")

	dir_str = ""
	count = 0
	for cur_dir in sys_arg:
		if count == 0:
			count = count + 1
		if count == len(sys_arg):
			break
		dir_str = dir_str + cur_dir + "/"
		count = count + 1
	return dir_str

curr_dir = get_dir(sys.argv[0])

bot = Bot()

# 机器人账号自身
myself = bot.self
my_friends = bot.friends(update=True)

if not os.path.exists(curr_dir + "group-images/"):
	os.mkdir(curr_dir + "group-images/")

count = 0
for friend in my_friends:
	print(friend.nick_name)
	friend.get_avatar(curr_dir + "group-images/" + str(count) + ".jpg")
	count = count + 1

# 获取下载的头像文件
ls = os.listdir(curr_dir + 'group-images')

# 去除非 .jpg 文件
for filter_ls in ls:
	if ".jpg" in filter_ls:
		continue
	else:
		ls.remove(filter_ls)
		
# 排序
ls.sort(key=lambda x:int(x[:-4]))

# 头像墙尺寸
image_size = 2560

each_size = math.floor(image_size/math.floor(math.sqrt(len(ls))))
x_lines = math.ceil(math.sqrt(len(ls)))
y_lines = math.ceil(math.sqrt(len(ls)))
image = Image.new('RGB', (each_size * x_lines, each_size * y_lines))

x = 0
y = 0

for file_names in ls:
	try:
		img = Image.open(curr_dir + "group-images/" + file_names)
		print("正在处理" + file_names.split('.jpg')[0] + "/" + str(len(ls)))
	except IOError:
		continue
	else:
		img = img.resize((each_size, each_size))
		image.paste(img, (x * each_size, y * each_size))
		x += 1
		if x == x_lines:
			x = 0
			y += 1
				
img = image.save(curr_dir + "all.jpg")


try:
	shutil.rmtree(curr_dir + "group-images/")
	print("收尾，清理临时文件")
except FileNotFoundError:
	print("没什么好删的")

print("！！！\n生成完毕了，放在了目录" + curr_dir + "，去看看吧。")
print("工具作者：@Sunbelife（新浪微博）")
print("公众号：Sunbelife")
print("感谢使用")
print("v1.2")
print("2019.4.18")