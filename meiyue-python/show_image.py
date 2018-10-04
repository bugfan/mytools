import io


from Tkinter import *

from PIL import Image, ImageTk
from urllib2 import urlopen

image_bytes = urlopen(
    'http://oiogxl80p.bkt.clouddn.com/static/user/9833/jpg/1509677462464.jpg').read()

data_stream = io.BytesIO(image_bytes)

pil_image = Image.open(data_stream)

# w, h = pil_image.size
# fname = url.split('/')[-1]
# sf = "{} ({}x{})".format(fname, w, h)

root = Tk()
root.title('d')
tk_image = ImageTk.PhotoImage(pil_image)
label = Button(root, image=tk_image, bg='brown')
label.pack(padx=5, pady=5)
root.mainloop()
