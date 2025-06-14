import webview
import time

import Auth
import Play
import FilesManage

from _config_ import _config_


class Api():
  def close(self):
    window.destroy()

  def minimize(self):
    window.minimize()


if __name__ == '__main__':
  window = webview.create_window(
    "HyperBox Launcher",
    "gui/index.html",

    frameless = True,
    easy_drag = True,
    width = 860,
    height = 520,
    background_color = "#1a1a1a",
    js_api = Api()
  )

  webview.start()

