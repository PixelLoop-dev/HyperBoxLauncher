from websockets import connect
from _config_ import _config_


class WebSocketClient:
  def __init__(self, host='0.0.0.0', port=_config_.PORT):
    self.host = host
    self.port = port
    self.base_url = f"ws://{self.host}:{self.port}"

  async def _send_and_receive(self, message: str):
    async with connect(self.base_url) as ws:
      await ws.send(message); return await ws.recv()

  async def version(self) -> str:
    return await self._send_and_receive('version')

  async def try_to_login(self, login: str, password: str) -> bool:
    return await self._send_and_receive(f'auth {login} {password}')

  async def modpacks(self) -> dict:
    return await self._send_and_receive('modpacks')

  async def files(self, modpack: str) -> dict:
    return await self._send_and_receive(f'modpacks {modpack}')