// This is a modified version of the original textilizer bookmarklet by Gizoogle 2.0.
// The original bookmarklet can be found at https://raw.githubusercontent.com/Gizoogle/gizoogle.github.io/master/NOCOMMENTSgizoogle_bookmarklet-textilizer.js
// Modified by Conner Glover

const tranzizzilations = {
  replacements: {
    "\\babout\\b": "'bout",
    "\\bam\\b": "be",
    "\\band\\b": "n",
    "\\bare\\b": "is",
    "\\bawesome\\b": "off tha hook",
    "\\bbecause\\b": "coz",
    "\\bbeing\\b": "bein",
    "\\bboy\\b": "boi",
    "\\bcar\\b": "ride",
    "\\bcars\\b": "ridez",
    "\\bchurch\\b": "chuch",
    "\\bcities\\b": "hoodz",
    "\\bcomrades\\b": "posse",
    "\\bcute\\b": "skanky",
    "\\bdog\\b": "dogg",
    "\\bdriving\\b": "rollin'",
    "\\eed\\b": "ee'",
    "\\bfor\\b": "fo`",
    "\\bfriend\\b": "nigga",
    "\\bfriends\\b": "niggaz",
    "\\ged\\b": "ge'",
    "\\bget\\b": "git",
    "\\bgot\\b": "gots",
    "\\bgreat\\b": "bootylicious",
    "\\bgun\\b": "gat",
    "\\bguns\\b": "gats",
    "\\bguy\\b": "homey",
    "\\bhappy\\b": "stoked",
    "\\head": "heezee",
    "\\bhouse\\b": "hizouse",
    "\\ied\\b": "y",
    "\\bin\\b": "'n",
    "\\binformation\\b": "411",
    "\\bis\\b": "be",
    "\\bkilled\\b": "iced",
    "\\bkilling\\b": "cappin'",
    "\\blil\\b": "shawty",
    "\\blil'\\b": "shawty",
    "\\blittle\\b": "shawty",
    "\\bmad\\b": "buggin'",
    "\\bman\\b": "dawg",
    "\\bmy\\b": "mah",
    "\\bnice\\b": "funky ass",
    "\\bnothing\\b": "nuttin",
    "\\ool\\b": "oo'",
    "\\bpeculiar\\b": "perculiar",
    "\\bpeople\\b": "thugz",
    "\\bplayers\\b": "playas",
    "\\bplease\\b": "pleaze",
    "\\bpolice\\b": "po-po",
    "\\bsays\\b": "sez",
    "se\\b": "ze",
    "sed\\b": "zed",
    "ses\\b": "zes",
    "\\bsomething\\b": "sum-m sum-m",
    "\\bsuper\\b": "snoopa",
    "\\btake\\b": "takes",
    "\\btalk\\b": "rap",
    "\\btelevision": "televizzle",
    "\\bthe\\b": "tha",
    "\\btheir\\b": "they",
    "\\bthis\\b": "dis",
    "\\bto\\b": "ta",
    "\\btown\\b": "ghetto",
    "\\bwith": "wit",
    "\\bwomen\\b": "bitchez",
    "\\byour\\b": "yo'",
    "\\byourself\\b": "yoself",
    "\\byou're\\b": "yoe",
    "\\byou've\\b": "you",
    "\\zed\\b": "ze'",
  },
  replacements2: {
    "\\'s\\b": "",
    "\\ers\\b": "a",
    "\\er\\b": "a",
    "\\ings\\b": "'n",
    "\\ing\\b": "'n",
  },
  longReplacements: {
    "\\bdo you\\b": "d-ya",
    "\\bor anything\\b": "or nothin' trippin'",
    "\\bwith a\\b": "witta",
    "\\byou all\\b": "y-aw",
    "\\byou're all\\b": "y-aw",
  },
  erNouns: [
    "brotha",
    "cracka",
    "crazy ass nigga",
    "nigga",
    "playa",
    "killa",
    "pimp",
    "rappa",
    "pusha",
    "shot calla",
    "gangsta",
    "drug deala",
    "hustla",
    "wanna be gangsta",
    "bitch",
    "motherfucka",
    "baller",
    "poser",
  ],
  ingVerbs: [
    "cruisin'",
    "bustin'",
    "saggin'",
    "frontin'",
    "hatin'",
    "ho-slappin'",
    "blunt-rollin'",
    "weed-smokin'",
    "straight trippin'",
    "clockin'",
    "spendin'",
    "messin'",
    "blingin'",
    "ridin'",
    "doggy stylin'",
    "pimpin'",
    "gang bangin'",
    "rhymin'",
    "chillin'",
    "ballin'",
    "perpetratin'",
    "steppin'",
    "sippin'",
    "dippin'",
    "mackin'",
    "mobbin'",
    "crack-a-lackin`",
    "trippin'",
  ],
  endings: [
    " and cant no hood fuck with death rizzow.",
    " and my money on my mind.",
    " and yo momma.",
    " aww nah.",
    " bitch ass nigga.",
    " but real niggaz don't give a fuck.",
    " cuz I put gangsta rap on tha map.",
    " cuz Im tha Double O G.",
    " cuz I'm fresh out the pen.",
    " cuz its a doggy dog world.",
    " cuz its a G thang.",
    " cuz its a pimp thang.",
    " cuz this is how we do it.",
    " dogg.",
    " doggystyle.",
    " droppin hits.",
    " fo all my homies in the pen.",
    " fo gettin yo pimp on.",
    " fo my bling bling.",
    " fo' real.",
    " fo' sheezy.",
    " fo' sho'.",
    " fo yo bitch ass.",
    " from tha streets of tha L-B-C.",
    " gangsta style.",
    " hittin that booty.",
    " in all flavas.",
    " if you gots a paper stack.",
    " in tha dogg pound.",
    " in tha hood.",
    " in tha mutha fuckin club.",
    " keep'n it real yo.",
    " like a motha fucka.",
    " like a tru playa'.",
    " like old skool shit.",
    " like this and like that and like this and uh.",
    " mah nizzle.",
    " n shit.",
    " n we out!",
    " now motherfuckers lemme here ya say hoe.",
    " now pass the glock.",
    " paper'd up.",
    " puttin tha smack down.",
    " ridin' in mah double R.",
    " sho nuff.",
    " so bow down to the bow wow!",
    " so i can get mah pimp on.",
    " so jus' chill.",
    " so show some love, niggaz!",
    " so sit back relax new jacks get smacked.",
    " so you betta run and grab yo glock.",
    " spittin' that real shit.",
    " straight from long beach nigga.",
    " ta help you tap dat ass.",
    " to increase tha peace.",
    " thats off tha hook yo.",
    " upside yo head.",
    " where the sun be shinin and I be rhymin'.",
    " wit da big Bo$$$ Dogg.",
    " with my forty-fo' mag.",
    " with my hoes on my side, and my strap on my back",
    " with the gangsta shit that keeps ya hangin.",
    " with the S-N-double-O-P.",
    " ya dig?",
    " ya feelin' me?",
    " yaba daba dizzle.",
    " yeah yeah baby.",

    ", betta check yo self.",
    ", chill yo.",
    ", know what im sayin?",
    ", niggaz, better recognize.",
    ", ya feel me?",

    ". Aint no killin' everybodys chillin'.",
    ". Aint no L-I-M-I-to-tha-T.",
    ". Aint no stoppin' this shit nigga.",
    ". Anotha dogg house production.",
    ". Boo-Yaa!",
    ". Boom bam as I step in the jam, God damn.",
    ". Bounce wit me.",
    ". Bow wow wow yippee yo yipee yay.",
    ". Chill as I take you on a trip.",
    ". Death row 187 4 life.",
    ". Dogg House Records in the motha fuckin house.",
    ". Drop it like its hot.",
    ". Fo'-fo' desert eagle to your motherfuckin' dome.",
    ". Freak y'all, into the beat y'all.",
    ". Holla!",
    ". Hollaz to the East Side.",
    ". I started yo shit and i'll end yo' shit.",
    ". I thought i told ya, nigga I'm a soldier.",
    ". Ill slap tha taste out yo mouf.",
    ". Im a bad boy wit a lotta hos.",
    ". Im crazy, you can't phase me.",
    ". I'm a mutha fuckin 2-time felon.",
    ". It dont stop till the wheels fall off.",
    ". Its just anotha homocide.",
    ". It's your homie snoop dogg from the dpg.",
    ". Keep the party crackin while I'm steady rappin.",
    ". Keep'n it gangsta dogg.",
    ". Listen to how a motherfucker flow shit.",
    ". Nigga get shut up or get wet up.",
    ". One, two three and to tha four.",
    ". Put ya mutha fuckin choppers up if ya feel this.",
    ". Real niggas recognize the realness.",
    ". Relax, cus I'm bout to take my respect.",
    ". Slap your mutha fuckin self.",
    ". Snoop dogg is in this bitch.",
    ". Snoop heffner mixed with a little bit of doggy flint.",
    ". Subscribe nigga, get yo issue.",
    ". They call me tha black folks president.",
    ". Throw yo guns in the motherfuckin air.",
    ". Tru niggaz do niggaz.",
    ". Wussup to all my niggaz in the house.",
    ". Ya fuck with us, we gots to fuck you up.",
    ". Yippie yo, you can't see my flow.",
    ". You gotta check dis shit out yo.",
    ". You'se a flea and I'm the big dogg.",
  ],
  endExceptions: [
    "www.",
    ".com",
    ".net",
    ".org",
    ".gov",
    "http:",
    "https:",
    ".co",
    ".htm",
    ".html",
    ".jpg",
    ".gif",
    ".png",
    ".bmp",
    ".swf",
    "Mr.",
    "Mrs.",
    "Ms.",
    "Dr.",
    "Sr.",
    "Jr.",
    "Rev.",
    "Lt.",
    "Sgt.",
    "St.",
    "Ave.",
    "Rt.",
    "Rd.",
    "A.M.",
    "P.M.",
    "a.m.",
    "p.m.",
    "U.S.",
    "U.K.",
    "L.B.C.",
    "Corp.",
    "Ltd.",
    "Inc.",
    "Co.",
    "ft.",
    "yds.",
    "i.e.",
    "e.g.",
    ".0",
    ".1",
    ".2",
    ".3",
    ".4",
    ".5",
    ".6",
    ".7",
    ".8",
    ".9",
    ":0",
    ":1",
    ":2",
    ":3",
    ":4",
    ":5",
    ":6",
    ":7",
    ":8",
    ":9",
    "0.",
    "1.",
    "2.",
    "3.",
    "4.",
    "5.",
    "6.",
    "7.",
    "8.",
    "9.",
    "0:",
    "1:",
    "2:",
    "3:",
    "4:",
    "5:",
    "6:",
    "7:",
    "8:",
    "9:",
    "A.",
    "B.",
    "C.",
    "D.",
    "E.",
    "F.",
    "G.",
    "H.",
    "I.",
    "J.",
    "K.",
    "L.",
    "M.",
    "N.",
    "O.",
    "P.",
    "Q.",
    "R.",
    "S.",
    "T.",
    "U.",
    "V.",
    "W.",
    "X.",
    "Y.",
    "Z.",
  ],
  specialWords: [
    "Snoop",
    "snoop",
    "Dogg",
    "dogg",
    "Google",
    "google",
    "Gizoogle",
    "gizoogle",
    "Textilizer",
  ],
  vowels: {
    a: "",
    e: "",
    i: "",
    o: "",
    u: "",
    A: "",
    E: "",
    I: "",
    O: "",
    U: "",
  },
  letters: {
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
    j: "",
    k: "",
    l: "",
    m: "",
    n: "",
    o: "",
    p: "",
    q: "",
    r: "",
    s: "",
    t: "",
    u: "",
    v: "",
    w: "",
    x: "",
    y: "",
    z: "",
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
    H: "",
    I: "",
    J: "",
    K: "",
    L: "",
    M: "",
    N: "",
    O: "",
    P: "",
    Q: "",
    R: "",
    S: "",
    T: "",
    U: "",
    V: "",
    W: "",
    X: "",
    Y: "",
    Z: "",
  },
};

for (
  var replacements,
    regex,
    key,
    textnodes,
    node,
    s,
    replacements2,
    longReplacements,
    erNouns,
    ingVerbs,
    endings,
    endExceptions,
    specialWords,
    vowels,
    periodcheck = new Array(),
    i = 0;
  i < 30;
  i++
)
  periodcheck[i] = i;

var izzlecheck = new Array();
for (i = 0; i < 25; i++) izzlecheck[i] = i;
var onesyllcheck = new Array();
for (i = 0; i < 35; i++) onesyllcheck[i] = i;
var tothacheck = new Array();
for (i = 0; i < 7; i++) tothacheck[i] = i;
var replacementcheck = new Array();
for (i = 0; i < 90; i++) replacementcheck[i] = i;
var nounverbcheck = new Array();
for (i = 0; i < 30; i++) nounverbcheck[i] = i;

replacements = tranzizzilations.replacements;
replacements2 = tranzizzilations.replacements2;
longReplacements = tranzizzilations.longReplacements;
erNouns = tranzizzilations.erNouns;
ingVerbs = tranzizzilations.ingVerbs;
endings = tranzizzilations.endings;
endExceptions = tranzizzilations.endExceptions;
specialWords = tranzizzilations.specialWords;
vowels = tranzizzilations.vowels;
letters = tranzizzilations.letters;

// import replacements from "./tranzizzilations.json"
// import replacements2 from "./tranzizzilations.json"
// import longReplacements from "./tranzizzilations.json"
// import erNouns from "./tranzizzilations.json"
// import ingVerbs from "./tranzizzilations.json"
// import endings from "./tranzizzilations.json"
// import endExceptions from "./tranzizzilations.json"
// import specialWords from "./tranzizzilations.json"
// import vowels from "./tranzizzilations.json"
// import letters from "./tranzizzilations.json"

function tranzizzilate() {
  var e = "",
    r = "",
    t = "",
    a = "",
    o = /\s{1,}/,
    n = /\s{1,}/g,
    i = new Array(),
    p = new Array(),
    c = new Array(),
    l = new Array(),
    h = new Array(),
    g = new Array(),
    A = new Array(),
    f = new Array(),
    C = new Array(),
    b = new Array(),
    u = new Array(),
    w = new Array();

  for (key in ((regex = {}), replacements)) regex[key] = new RegExp(key, "g");
  for (key in replacements2) regex[key] = new RegExp(key, "g");
  var z = new Array(),
    U = -1;
  for (key in longReplacements)
    (regex[key] = new RegExp(key, "g")),
      (z[++U] = new Array()),
      (z[U][0] = key),
      (z[U][1] = key.split(/ /).length),
      (z[U][2] = key.split(/ /)),
      (z[U][3] = new RegExp(z[U][2][0] + "\\b", "g"));
  textnodes = document.evaluate(
    "//*[not(self::script or self::style or self::code)]/text()",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null
  );

  for (var y = 0; y < textnodes.snapshotLength; y++) {
    (node = textnodes.snapshotItem(y)),
      (s = node.data),
      (c[y] = new Array()),
      (l[y] = new Array()),
      (g[y] = new Array()),
      (A[y] = new Array()),
      (h[y] = new Array()),
      (f[y] = new Array()),
      (C[y] = new Array()),
      (b[y] = new Array()),
      (u[y] = new Array()),
      (w[y] = new Array()),
      (p[y] = new Array()),
      (i[y] = new Array()),
      (p[y] = s.match(n)),
      (i[y] = s.split(o));
    for (var m = 0; m < i[y].length; m++) {
      if (
        Math.floor(100 * Math.random()) in replacementcheck &&
        1 != w[y][m] &&
        1 != c[y][m]
      )
        for (var k = 0; k < z.length; k++)
          if (
            i[y][m].toLowerCase().replace(z[k][3], "").toLowerCase() !=
            i[y][m].toLowerCase()
          ) {
            r = i[y][m].toLowerCase();
            for (var S = 1; S < z[k][1] && i[y][m + S] && " " == p[y][m]; S++)
              r = r + " " + i[y][m + S].toLowerCase();
            if (
              r != r.replace(regex[z[k][0]], longReplacements[z[k][0]]) &&
              (i[y].splice(m, z[k][1], i[y].slice(m, m + z[k][1]).join(" ")),
              p[y].splice(m, z[U][1] - 1),
              (e = i[y][m]
                .toLowerCase()
                .replace(
                  regex[z[k][0]],
                  longReplacements[z[k][0]]
                )).toLowerCase() != i[y][m].toLowerCase())
            ) {
              if (i[y][m].toUpperCase() == i[y][m]) i[y][m] = e.toUpperCase();
              else
                for (var d = 0; d < i[y][m].toString().length; d++) {
                  if (
                    i[y][m].charAt(d) in letters &&
                    i[y][m].charAt(d).toUpperCase() == i[y][m].charAt(d) &&
                    0 == d
                  ) {
                    i[y][m] = e.charAt(d).toUpperCase() + e.substr(d + 1);
                    break;
                  }
                  if (
                    i[y][m].charAt(d) in letters &&
                    i[y][m].charAt(d).toUpperCase() == i[y][m].charAt(d)
                  ) {
                    i[y][m] =
                      e.substr(0, d) +
                      e.charAt(d).toUpperCase() +
                      e.substr(d + 1);
                    break;
                  }
                  if (i[y][m].charAt(d) in letters) {
                    i[y][m] = e;
                    break;
                  }
                }
              c[y][m] = 1;
            }
          }
      if (
        Math.floor(100 * Math.random()) in replacementcheck &&
        1 != w[y][m] &&
        1 != c[y][m]
      )
        for (key in replacements)
          if (
            (e = i[y][m]
              .toLowerCase()
              .replace(regex[key], replacements[key])).toLowerCase() !=
            i[y][m].toLowerCase()
          ) {
            if (i[y][m].toUpperCase() == i[y][m]) i[y][m] = e.toUpperCase();
            else
              for (d = 0; d < i[y][m].toString().length; d++) {
                if (
                  i[y][m].charAt(d) in letters &&
                  i[y][m].charAt(d).toUpperCase() == i[y][m].charAt(d) &&
                  0 == d
                ) {
                  i[y][m] = e.charAt(d).toUpperCase() + e.substr(d + 1);
                  break;
                }
                if (
                  i[y][m].charAt(d) in letters &&
                  i[y][m].charAt(d).toUpperCase() == i[y][m].charAt(d)
                ) {
                  i[y][m] =
                    e.substr(0, d) +
                    e.charAt(d).toUpperCase() +
                    e.substr(d + 1);
                  break;
                }
                if (i[y][m].charAt(d) in letters) {
                  i[y][m] = e;
                  break;
                }
              }
            c[y][m] = 1;
          }
      (g[y][m] = new Array()),
        (g[y][m][0] = 0),
        (A[y][m] = new Array()),
        (A[y][m][0] = 0),
        (h[y][m] = 0),
        (w[y][m] = 0),
        (C[y][m] = 0),
        (b[y][m] = 0);
      for (var v = 0; v < i[y][m].toString().length; v++)
        (f[y][v] = 0),
          i[y][m].toString().charAt(v) in letters &&
            ((u[y][m] = v), 0 == b[y][m] && ((C[y][m] = v), (b[y][m] = 1)));
      for (v = 0; v < i[y][m].toString().length; v++)
        i[y][m].toString().charAt(v) in vowels &&
          v != u[y][m] &&
          (0 == f[y][v]
            ? (h[y][m]++, (g[y][m][g[y][m].length] = v), (f[y][v + 1] = 1))
            : (A[y][m][A[y][m].length] = v - 1));
      "y" != i[y][m].toString().charAt(u[y][m]).toLowerCase() ||
        i[y][m].toString().charAt(u[y][m] - 1) in vowels ||
        (h[y][m]++, (g[y][m][g[y][m].length] = u[y][m])),
        0 == h[y][m] &&
          i[y][m].toString().charAt(u[y][m]) in vowels &&
          (h[y][m]++, (g[y][m][g[y][m].length] = u[y][m]));
      for (var M = 0; M < endExceptions.length; M++)
        -1 != i[y][m].indexOf(endExceptions[M]) && (w[y][m] = 1);
      for (M = 0; M < specialWords.length; M++)
        -1 != i[y][m].indexOf(specialWords[M]) && (w[y][m] = 1);
      if (
        Math.floor(100 * Math.random()) in nounverbcheck &&
        1 != w[y][m] &&
        1 != c[y][m] &&
        ("er" == i[y][m].substr(u[y][m] - 1, 2).toLowerCase() ||
          "ers" == i[y][m].substr(u[y][m] - 2, 3).toLowerCase())
      ) {
        var x = Math.floor(Math.random() * erNouns.length),
          L = !1;
        if ("ers" == i[y][m].substr(u[y][m] - 2, 3).toLowerCase()) {
          L = !0;
          var j = Math.floor(2 * Math.random());
          if (0 == j) var E = "s";
          else if (1 == j) E = "z";
          "bitch" == erNouns[x] && (E = "e" + E);
        }
        0 == C[y][m]
          u[y][m] != i[y][m].toString().length - 1 &&
            (e += i[y][m].toString().substr(u[y][m] + 1)),
          (i[y][m] = e),
          (c[y][m] = 1);
      }
      if (
        (Math.floor(100 * Math.random()) in nounverbcheck &&
          1 != w[y][m] &&
          1 != c[y][m] &&
          (("ing" != i[y][m].substr(u[y][m] - 2, 3).toLowerCase() &&
            "ings" != i[y][m].substr(u[y][m] - 3, 4).toLowerCase()) ||
            ((e =
              0 == C[y][m]
                ? ingVerbs[Math.floor(Math.random() * ingVerbs.length)]
                : i[y][m].substr(0, C[y][m]) +
                  ingVerbs[Math.floor(Math.random() * ingVerbs.length)]),
            i[y][m].toUpperCase().charAt(C[y][m]) == i[y][m].charAt(C[y][m]) &&
              (e =
                i[y][m].toUpperCase() == i[y][m]
                  ? e.toUpperCase()
                  : e.substr(0, C[y][m]) +
                    e.toUpperCase().charAt(C[y][m]) +
                    e.substr(C[y][m] + 1)),
            u[y][m] != i[y][m].toString().length - 1 &&
              (e += i[y][m].toString().substr(u[y][m] + 1)),
            (i[y][m] = e),
            (c[y][m] = 1))),
        Math.floor(100 * Math.random()) in replacementcheck &&
          1 != w[y][m] &&
          1 != c[y][m])
      )
        for (key in replacements2)
          if (
            (e = i[y][m]
              .toLowerCase()
              .replace(regex[key], replacements2[key])).toLowerCase() !=
            i[y][m].toLowerCase()
          ) {
            if (i[y][m].toUpperCase() == i[y][m]) i[y][m] = e.toUpperCase();
            else
              for (d = 0; d < i[y][m].toString().length; d++) {
                if (
                  i[y][m].charAt(d) in letters &&
                  i[y][m].charAt(d).toUpperCase() == i[y][m].charAt(d) &&
                  0 == d
                ) {
                  i[y][m] = e.charAt(d).toUpperCase() + e.substr(d + 1);
                  break;
                }
                if (
                  i[y][m].charAt(d) in letters &&
                  i[y][m].charAt(d).toUpperCase() == i[y][m].charAt(d)
                ) {
                  i[y][m] =
                    e.substr(0, d) +
                    e.charAt(d).toUpperCase() +
                    e.substr(d + 1);
                  break;
                }
                if (i[y][m].charAt(d) in letters) {
                  i[y][m] = e;
                  break;
                }
              }
            c[y][m] = 1;
          }
      if (
        (Math.floor(100 * Math.random()) in tothacheck &&
          1 != w[y][m] &&
          1 != c[y][m] &&
          (1 == h[y][m] &&
            u[y][m] - C[y][m] >= 3 &&
            0 != g[y][m][h[y][m]] &&
            ((e =
              0 == C[y][m]
                ? i[y][m]
                    .toUpperCase()
                    .substr(0, g[y][m][h[y][m]])
                    .split("")
                    .join("-") +
                  "-to-tha-izz" +
                  i[y][m].substr(g[y][m][h[y][m]])
                : i[y][m].substr(0, C[y][m]) +
                  i[y][m]
                    .toUpperCase()
                    .substr(C[y][m], g[y][m][h[y][m]])
                    .split("")
                    .join("-") +
                  "-to-tha-izz" +
                  i[y][m].substr(g[y][m][h[y][m]])),
            i[y][m].toUpperCase() == i[y][m]
              ? (i[y][m] = e.toUpperCase())
              : (i[y][m] = e),
            (c[y][m] = 1)),
          2 == h[y][m] &&
            u[y][m] - C[y][m] >= 3 &&
            0 != g[y][m][h[y][m]] &&
            "y" == i[y][m].toLowerCase().charAt(u[y][m]) &&
            (i[y][m].toUpperCase().charAt(g[y][m][h[y][m]] - 1) ==
              i[y][m].toUpperCase().charAt(g[y][m][h[y][m]] - 2) &&
              (e =
                i[y][m]
                  .toUpperCase()
                  .substr(0, g[y][m][h[y][m]] - 2)
                  .split("")
                  .join("-") +
                "-Double-" +
                i[y][m].toUpperCase().charAt(g[y][m][h[y][m]] - 2) +
                "izz" +
                i[y][m].substr(g[y][m][h[y][m]])),
            i[y][m].toUpperCase() == i[y][m]
              ? (i[y][m] = e.toUpperCase())
              : (i[y][m] = e),
            (c[y][m] = 1))),
        Math.floor(100 * Math.random()) in onesyllcheck &&
          1 != w[y][m] &&
          1 != c[y][m])
      )
        if (1 == h[y][m] && u[y][m] - C[y][m] >= 2)
          switch (Math.floor(5 * Math.random())) {
            case 0:
              i[y][m].charAt(C[y][m]) in vowels ||
                ((e = i[y][m].toString().substr(0, C[y][m] + 1) + "izzy"),
                u[y][m] != i[y][m].toString().length - 1 &&
                  (e += i[y][m].toString().substr(u[y][m] + 1)),
                i[y][m].toUpperCase() == i[y][m]
                  ? (i[y][m] = e.toUpperCase())
                  : (i[y][m] = e),
                (c[y][m] = 1));
              break;
            case 1:
              i[y][m].charAt(C[y][m]) in vowels ||
                ((e =
                  i[y][m].toString().substr(0, g[y][m][1]) +
                  "izn" +
                  i[y][m].toString().substr(g[y][m][1])),
                i[y][m].toUpperCase() == i[y][m]
                  ? (i[y][m] = e.toUpperCase())
                  : (i[y][m] = e),
                (c[y][m] = 1));
              break;
            case 2:
              i[y][m].charAt(C[y][m]) in vowels ||
                ((e = i[y][m].toString().substr(0, g[y][m][1]) + "izzle"),
                u[y][m] != i[y][m].toString().length - 1 &&
                  (e += i[y][m].toString().substr(u[y][m] + 1)),
                i[y][m].toUpperCase() == i[y][m]
                  ? (i[y][m] = e.toUpperCase())
                  : (i[y][m] = e),
                (c[y][m] = 1));
              break;
            case 3:
              i[y][m].charAt(C[y][m]) in vowels ||
                ((e = i[y][m].toString().substr(0, g[y][m][1]) + "izzay"),
                u[y][m] != i[y][m].toString().length - 1 &&
                  (e += i[y][m].toString().substr(u[y][m] + 1)),
                i[y][m].toUpperCase() == i[y][m]
                  ? (i[y][m] = e.toUpperCase())
                  : (i[y][m] = e),
                (c[y][m] = 1));
              break;
            case 4:
              i[y][m].charAt(C[y][m]) in vowels ||
                ((e =
                  i[y][m].toString().substr(0, g[y][m][1]) +
                  "izz" +
                  i[y][m].toString().substr(g[y][m][1])),
                i[y][m].toUpperCase() == i[y][m]
                  ? (i[y][m] = e.toUpperCase())
                  : (i[y][m] = e),
                (c[y][m] = 1));
          }
      if (
        Math.floor(100 * Math.random()) in izzlecheck &&
        1 != w[y][m] &&
        1 != c[y][m]
      ) {
        2 == h[y][m] &&
          ((e = i[y][m].toString().substr(0, g[y][m][2]) + "izzle"),
          "s" == i[y][m].charAt(u[y][m]) && (e += "s"),
          u[y][m] != i[y][m].toString().length - 1 &&
            (e += i[y][m].toString().substr(u[y][m] + 1)),
          i[y][m].toUpperCase() == i[y][m]
            ? (i[y][m] = e.toUpperCase())
            : (i[y][m] = e),
          (c[y][m] = 1)),
          3 == h[y][m] &&
            ((e = i[y][m].toString().substr(0, g[y][m][2]) + "izzle"),
            "s" == i[y][m].charAt(u[y][m]) && (e += "s"),
            u[y][m] != i[y][m].toString().length - 1 &&
              (e += i[y][m].toString().substr(u[y][m] + 1)),
            i[y][m].toUpperCase() == i[y][m]
              ? (i[y][m] = e.toUpperCase())
              : (i[y][m] = e),
            (c[y][m] = 1)),
          4 == h[y][m] &&
            ((e = i[y][m].toString().substr(0, g[y][m][3]) + "izzle"),
            "s" == i[y][m].charAt(u[y][m]) && (e += "s"),
            u[y][m] != i[y][m].toString().length - 1 &&
              (e += i[y][m].toString().substr(u[y][m] + 1)),
            i[y][m].toUpperCase() == i[y][m]
              ? (i[y][m] = e.toUpperCase())
              : (i[y][m] = e),
            (c[y][m] = 1)),
          5 == h[y][m] &&
            ((e = i[y][m].toString().substr(0, g[y][m][4]) + "izzle"),
            "s" == i[y][m].charAt(u[y][m]) && (e += "s"),
            u[y][m] != i[y][m].toString().length - 1 &&
              (e += i[y][m].toString().substr(u[y][m] + 1)),
            i[y][m].toUpperCase() == i[y][m]
              ? (i[y][m] = e.toUpperCase())
              : (i[y][m] = e),
            (c[y][m] = 1)),
          6 == h[y][m] &&
            ((e = i[y][m].toString().substr(0, g[y][m][5]) + "izzle"),
            "s" == i[y][m].charAt(u[y][m]) && (e += "s"),
            u[y][m] != i[y][m].toString().length - 1 &&
              (e += i[y][m].toString().substr(u[y][m] + 1)),
            i[y][m].toUpperCase() == i[y][m]
              ? (i[y][m] = e.toUpperCase())
              : (i[y][m] = e),
            (c[y][m] = 1)),
          h[y][m] >= 7 &&
            ((e = i[y][m].toString().substr(0, g[y][m][5]) + "izzle"),
            "s" == i[y][m].charAt(u[y][m]) && (e += "s"),
            u[y][m] != i[y][m].toString().length - 1 &&
              (e += i[y][m].toString().substr(u[y][m] + 1)),
            i[y][m].toUpperCase() == i[y][m]
              ? (i[y][m] = e.toUpperCase())
              : (i[y][m] = e),
            (c[y][m] = 1));
      }
      if (
        -1 != i[y][m].search(/\.|\!|\?|\:|\;/) &&
        1 != w[y][m] &&
        1 != l[y][m]
      )
        Math.floor(100 * Math.random()) in periodcheck &&
          (-1 != i[y][m].search(/\./) &&
            -1 == i[y][m].search(/\.\.\./) &&
            (a = "."),
          -1 != i[y][m].search(/\!/) && (a = "!"),
          -1 != i[y][m].search(/\?/) && (a = "?"),
          -1 != i[y][m].search(/\:/) && (a = ":"),
          -1 != i[y][m].search(/\;/) && (a = ";"),
          -1 != i[y][m].search(/\.\.\./) && (a = "..."),
          (t =
            "." ==
            (t = endings[Math.floor(Math.random() * endings.length)]).charAt(0)
              ? a + t.substr(1)
              : t.replace(/\./, a)),
          (i[y][m] = i[y][m].replace(a, t)),
          (c[y][m] = 1),
          (l[y][m] = 1));
    }
    (s = i[y][0]), p[y] && p[y][0] && (s += p[y][0]);
    for (var N = 1; N < i[y].length; N++)
      (s += i[y][N]), p[y][N] && (s += p[y][N]);
    node.data = s;
  }
}

tranzizzilate();
