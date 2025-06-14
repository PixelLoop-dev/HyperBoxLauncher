import webview

import Auth
import Play
import FilesManage

from _config_ import _config_


class Api():
  def close(self):
    window.destroy()

  def minimize(self):
    window.minimize()

  def to_login(self):
    window.load_url("gui/login.html")

  def to_register(self):
    window.load_url("gui/register.html")



if __name__ == '__main__':
  window = webview.create_window(
    "Infinix Launcher",
    "gui/index.html",
        
    frameless=True,
    easy_drag=True,
    width=920,
    height=520,
    background_color="#1a1a1a",
    js_api=Api()
  )

  webview.start()

