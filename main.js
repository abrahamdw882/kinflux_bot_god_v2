process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import './config.js';
import { createRequire } from 'module';
import _0x4b6de0, { join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { platform } from 'process';
import * as _0x3818d5 from 'ws';
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs';
import _0x225d64 from 'yargs';
import { spawn } from 'child_process';
import _0x555a67 from 'lodash';
import _0x296c40 from 'chalk';
import _0x2ec945 from 'syntax-error';
import { tmpdir } from 'os';
import { format } from 'util';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
import { Low, JSONFile } from 'lowdb';
import _0x4a674b from 'pino';
import { mongoDB, mongoDBV2 } from './lib/mongoDB.js';
import _0x2a7e58 from './lib/store.js';
import _0x4ad840 from 'dotenv';
const {
  CONNECTING
} = _0x3818d5;
const {
  chain
} = _0x555a67;
const PORT = process.env.PORT || process.env.SERVER_PORT || 0xbb8;
protoType();
serialize();
_0x4ad840.config();
global.__filename = function filename(_0x23a93c = import.meta.url, _0x2badf2 = platform !== "win32") {
  return _0x2badf2 ? /file:\/\/\//.test(_0x23a93c) ? fileURLToPath(_0x23a93c) : _0x23a93c : pathToFileURL(_0x23a93c).toString();
};
global.__dirname = function dirname(_0x2c7472) {
  return _0x4b6de0.dirname(global.__filename(_0x2c7472, true));
};
global.__require = function require(_0x256790 = import.meta.url) {
  return createRequire(_0x256790);
};
global.API = (_0x786cf5, _0x4229f9 = '/', _0x56f421 = {}, _0x295576) => (_0x786cf5 in global.APIs ? global.APIs[_0x786cf5] : _0x786cf5) + _0x4229f9 + (_0x56f421 || _0x295576 ? '?' + new URLSearchParams(Object.entries({
  ..._0x56f421,
  ...(_0x295576 ? {
    [_0x295576]: global.APIKeys[_0x786cf5 in global.APIs ? global.APIs[_0x786cf5] : _0x786cf5]
  } : {})
})) : '');
global.timestamp = {
  'start': new Date()
};
const __dirname = global.__dirname(import.meta.url);
global.opts = new Object(_0x225d64(process.argv.slice(0x2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (opts.prefix || "‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-").replace(/[|\\{}()[\]^$+*?.\-\^]/g, "\\$&") + ']');
global.opts.db = process.env.MONGO_DB;
global.db = new Low(/https?:\/\//.test(opts.db || '') ? new cloudDBAdapter(opts.db) : /mongodb(\+srv)?:\/\//i.test(opts.db) ? opts.mongodbv2 ? new mongoDBV2(opts.db) : new mongoDB(opts.db) : new JSONFile((opts._[0x0] ? opts._[0x0] + '_' : '') + 'database.json'));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0x2f621f => setInterval(async function () {
      if (!global.db.READ) {
        clearInterval(this);
        _0x2f621f(global.db.data == null ? global.loadDatabase() : global.db.data);
      }
    }, 1000));
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  await global.db.read()['catch'](console.error);
  global.db.READ = null;
  global.db.data = {
    'users': {},
    'chats': {},
    'stats': {},
    'msgs': {},
    'sticker': {},
    'settings': {},
    ...(global.db.data || {})
  };
  global.db.chain = chain(global.db.data);
};
loadDatabase();
global.authFile = (opts._[0x0] || 'guru') + ".data.json";
const {
  state,
  saveState
} = _0x2a7e58.useSingleFileAuthState(global.authFile);
const connectionOptions = {
  'printQRInTerminal': true,
  'auth': state,
  'logger': _0x4a674b({
    'level': 'silent'
  }),
  'browser': ['GURU-BOT', "Safari", '1.0.0']
};
global.conn = makeWASocket(connectionOptions);
conn.isInit = false;
if (!opts.test) {
  setInterval(async () => {
    if (global.db.data) {
      await global.db.write()["catch"](console.error);
    }
    if (opts.autocleartmp) {
      try {
        clearTmp();
      } catch (_0xe86bc1) {
        console.error(_0xe86bc1);
      }
    }
  }, 60000);
}
if (opts.server) {
  (await import("./server.js"))['default'](global.conn, PORT);
}
async function clearTmp() {
  const _0x22d30c = [tmpdir(), join(__dirname, "./tmp")];
  const _0x1aa906 = [];
  _0x22d30c.forEach(_0x187f57 => readdirSync(_0x187f57).forEach(_0x3683ab => _0x1aa906.push(join(_0x187f57, _0x3683ab))));
  return _0x1aa906.map(_0x50294e => {
    const _0x20f76d = statSync(_0x50294e);
    if (_0x20f76d.isFile() && Date.now() - _0x20f76d.mtimeMs >= 60000) {
      return unlinkSync(_0x50294e);
    }
    return false;
  });
}
setInterval(async () => {
  console.log(_0x296c40.cyan("✅  Auto clear  |  tmp folder cleared"));
}, 0xea60);
async function connectionUpdate(_0x5dd780) {
  if (_0x45c82e) {
    conn.isInit = true;
  }
  const _0x18fe6a = _0x23ffdd?.['error']?.['output']?.['statusCode'] || _0x23ffdd?.["error"]?.["output"]?.['payload']?.["statusCode"];
  if (_0x18fe6a && _0x18fe6a !== DisconnectReason.loggedOut && conn?.['ws']['readyState'] !== CONNECTING) {
    console.log(await global.reloadHandler(true)['catch'](console.error));
    global.timestamp.connect = new Date();
  }
  if (global.db.data == null) {
    loadDatabase();
  }
}
process.on('uncaughtException', console.error);
let isInit = true;
let handler = await import("./handler.js");
global.reloadHandler = async function (_0x2bf1d5) {
  try {
    const _0x525e74 = await import('./handler.js?update=' + Date.now())["catch"](console.error);
    if (Object.keys(_0x525e74 || {}).length) {
      handler = _0x525e74;
    }
  } catch (_0x77e8bc) {
    console.error(_0x77e8bc);
  }
  if (_0x2bf1d5) {
    const _0x1b31ee = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch {}
    conn.ev.removeAllListeners();
    global.conn = makeWASocket(connectionOptions, {
      'chats': _0x1b31ee
    });
    isInit = true;
  }
  if (!isInit) {
    conn.ev.off('messages.upsert', conn.handler);
    conn.ev.off('group-participants.update', conn.participantsUpdate);
    conn.ev.off('groups.update', conn.groupsUpdate);
    conn.ev.off("message.delete", conn.onDelete);
    conn.ev.off("connection.update", conn.connectionUpdate);
    conn.ev.off("creds.update", conn.credsUpdate);
  }
  conn.welcome = "Hello, @user\nWelcome to @group";
  conn.bye = "Goodbye @user";
  conn.spromote = "@user now admin";
  conn.sdemote = "@user demoted";
  conn.sDesc = "Group description changed \n@desc";
  conn.sSubject = "Group subject cchanged \n@group";
  conn.sIcon = "Group icon changed";
  conn.sRevoke = "Group link changed \n@revoke";
  conn.handler = handler.handler.bind(global.conn);
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
  conn.onDelete = handler.deleteUpdate.bind(global.conn);
  conn.connectionUpdate = connectionUpdate.bind(global.conn);
  conn.credsUpdate = saveState.bind(global.conn, true);
  conn.ev.on("messages.upsert", conn.handler);
  conn.ev.on("group-participants.update", conn.participantsUpdate);
  conn.ev.on("groups.update", conn.groupsUpdate);
  conn.ev.on("message.delete", conn.onDelete);
  conn.ev.on("connection.update", conn.connectionUpdate);
  conn.ev.on("creds.update", conn.credsUpdate);
  isInit = false;
  return true;
};
const pluginFolder = global.__dirname(join(__dirname, "./plugins/index"));
const pluginFilter = _0x3efc51 => /\.js$/.test(_0x3efc51);
global.plugins = {};
async function filesInit() {
  for (let _0x5f418b of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      let _0x15a802 = global.__filename(join(pluginFolder, _0x5f418b));
      const _0x2cfbd3 = await import(_0x15a802);
      global.plugins[_0x5f418b] = _0x2cfbd3['default'] || _0x2cfbd3;
    } catch (_0x5efdeb) {
      conn.logger.error(_0x5efdeb);
      delete global.plugins[_0x5f418b];
    }
  }
}
filesInit().then(_0x24cde4 => console.log(Object.keys(global.plugins)))["catch"](console.error);
global.reload = async (_0x55f866, _0x1e40c8) => {
  if (/\.js$/.test(_0x1e40c8)) {
    let _0x44a513 = global.__filename(join(pluginFolder, _0x1e40c8), true);
    if (_0x1e40c8 in global.plugins) {
      if (existsSync(_0x44a513)) {
        conn.logger.info(" updated plugin - '" + _0x1e40c8 + "'");
      } else {
        conn.logger.warn("deleted plugin - '" + _0x1e40c8 + "'");
        return delete global.plugins[_0x1e40c8];
      }
    } else {
      conn.logger.info("new plugin - '" + _0x1e40c8 + "'");
    }
    let _0x1f29a2 = _0x2ec945(readFileSync(_0x44a513), _0x1e40c8, {
      'sourceType': "module",
      'allowAwaitOutsideFunction': true
    });
    if (_0x1f29a2) {
      conn.logger.error("syntax error while loading '" + _0x1e40c8 + "'\n" + format(_0x1f29a2));
    } else {
      try {
        const _0x3e61b4 = await import(global.__filename(_0x44a513) + "?update=" + Date.now());
        global.plugins[_0x1e40c8] = _0x3e61b4["default"] || _0x3e61b4;
      } catch (_0x193079) {
        conn.logger.error("error require plugin '" + _0x1e40c8 + "\n" + format(_0x193079) + "'");
      } finally {
        global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([_0x1e94fa], [_0xde47d4]) => _0x1e94fa.localeCompare(_0xde47d4)));
      }
    }
  }
};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
  let _0xc24423 = await Promise.all([spawn("ffmpeg"), spawn("ffprobe"), spawn("ffmpeg", ["-hide_banner", '-loglevel', "error", "-filter_complex", "color", "-frames:v", '1', '-f', "webp", '-']), spawn('convert'), spawn("magick"), spawn('gm'), spawn('find', ['--version'])].map(_0x483444 => {
    return Promise.race([new Promise(_0x333d6f => {
      _0x483444.on("close", _0x5c4e89 => {
        _0x333d6f(_0x5c4e89 !== 0x7f);
      });
    }), new Promise(_0x3a2771 => {
      _0x483444.on("error", _0x18acd1 => _0x3a2771(false));
    })]);
  }));
  let [_0x377f39, _0x4f405e, _0x220b75, _0x19627c, _0x592470, _0x321a20, _0x4d49b3] = _0xc24423;
  console.log(_0xc24423);
  let _0x2db355 = global.support = {
    'ffmpeg': _0x377f39,
    'ffprobe': _0x4f405e,
    'ffmpegWebp': _0x220b75,
    'convert': _0x19627c,
    'magick': _0x592470,
    'gm': _0x321a20,
    'find': _0x4d49b3
  };
  Object.freeze(global.support);
  if (!_0x2db355.ffmpeg) {
    conn.logger.warn("Please install ffmpeg for sending videos (pkg install ffmpeg)");
  }
  if (_0x2db355.ffmpeg && !_0x2db355.ffmpegWebp) {
    conn.logger.warn("Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)");
  }
  if (!_0x2db355.convert && !_0x2db355.magick && !_0x2db355.gm) {
    conn.logger.warn("Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)");
  }
}
_quickTest().then(() => conn.logger.info("Quick Test Done"))['catch'](console.error);
