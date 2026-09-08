import fs from "fs";
import chalk from "chalk";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

/*
 * Create By Naze
 * Follow https://github.com/nazedev
 * Whatsapp : https://whatsapp.com/channel/0029VaWOkNm7DAWtkvkJBK43
 */

//───────────────< GLOBAL SETTINGS >───────────────\\

global.owner = ["254791245832"]; // ['628','628'] 2 owner atau lebih
global.author = "Sir E L I U D";
global.botname = "ELIUD♦BOT";
global.packname = "By Eliud Bot";
global.timezone = "Africa/Nairobi"; // Ganti pakai command .settimezone
global.locale = "en"; // Ganti pakai command .setlocale
global.listprefix = ["+", "!", "."];
global.defaultAdminKey = crypto.randomBytes(32).toString("hex");

global.pairing_code = true;
global.number_bot = ""; // Kalo pake panel bisa masukin nomer di sini, jika belum ambil session. Format : '628xx'

global.dns_use = "custom"; // custom / default
global.database = {
	path: "nazedev", // url mongodb / mysql / postgres / folder name local session 'nazedev'
	options: {
		store: true, // jika true ikut path yang diatas. jika false, otomatis local. jika { path: 'url_or_name.json' } menjadi terpisah
		database: true, // jika true ikut path yang diatas. jika false, otomatis local. jika { path: 'url_or_name.json' } menjadi terpisah
	},
};

global.fake = {
	anonim: "https://telegra.ph/file/95670d63378f7f4210f03.png",
	thumbnailUrl: "https://telegra.ph/file/fe4843a1261fc414542c4.jpg",
	thumbnail: fs.readFileSync("./src/media/hitori.jpeg"),
	thumbnail2: fs.readFileSync("./src/media/hitori.jpg"),
	docs: fs.readFileSync("./src/media/fake.pdf"),
	listfakedocs: ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf"],
};

global.my = {
	yt: "https://youtube.com/c/Nazedev",
	gh: "https://github.com/nazedev",
	gc: "https://chat.whatsapp.com/CPultzDlGoCI3OUvViyZtm",
	ch: "120363250409960161@newsletter",
};

global.limit = {
	free: 2000000000,
	premium: 9999999999,
	vip: 900000000,
};

global.money = {
	free: 10000000000,
	premium: 1000000000000,
	vip: 100000000000,
};

global.mess = {
	key: "Apikey limit! Silahkan Upgrade: https://sock.biz.id",
	owner: "*Command for Owner* !",
	admin: "*Command for Admin* !",
	botAdmin: "*Bot must be Admin* !",
	onWa: "Nomor tersebut tidak terdaftar di WhatsApp!",
	group: "*Allowed only in Grup* !",
	private: "*In private chats only* !",
	quoted: "Reply pesannya!",
	limit: "Limit habis!",
	prem: "Khusus Premium!",
	text: "Masukkan teksnya!",
	media: "*Reply with a media* !",
	wait: "*Processing your request* ...",
	fail: "*Oh shit ... imekataa* , *Contact my owner for more info* !",
	error: "Error!",
	done: "*Done , nimemaliza* ",
};

global.APIs = {
	naze: "https://api.naze.biz.id",
	neosantara: "https://api.neosantara.xyz/v1",
};
global.APIKeys = {
	"https://api.naze.biz.id": "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",
	"https://api.neosantara.xyz/v1": "API_KEY_NEOSANTARA_AI",
};

// Lainnya
global.jadwalSholat = {
	Subuh: "04:30",
	Dzuhur: "12:06",
	Ashar: "15:21",
	Maghrib: "18:08",
	Isya: "19:00",
};

global.listv = ["•", "●", "■", "✿", "▲", "➩", "➢", "➣", "➤", "✦", "✧", "△", "❀", "○", "□", "♤", "♡", "◇", "♧", "々", "〆"];
global.badWords = ["dongo", "konsol"]; // input kata-kata toxic yg lain. ex: ['dongo','dongonya']
global.chatLength = 1000;

fs.watchFile(__filename, async () => {
	fs.unwatchFile(__filename);
	console.log(chalk.yellowBright(`[UPDATE] ${__filename}`));
	await import(`${import.meta.url}?update=${Date.now()}`);
});
