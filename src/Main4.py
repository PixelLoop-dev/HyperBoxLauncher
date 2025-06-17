import webview
import time

from Auth import Auth

class Api():
  def close(self):
    window.destroy()

  def minimize(self):
    window.minimize()


  def TryToLogin(self, username, password):
    return True

  def TryToRegister(self, username, password, email):
    return True

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

