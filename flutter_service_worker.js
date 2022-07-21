'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ff4625c090df70567e44ece8d95a40e3",
".git/config": "7d195b7e16a391784e1675195f5c37bb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "582fd48d3844a0c19e83b845295a3a71",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "550a5e9bf3340814ec71568273bc9f10",
".git/logs/refs/heads/master": "550a5e9bf3340814ec71568273bc9f10",
".git/logs/refs/remotes/origin/master": "16ed683579d991ba3a8a84d08d11cb03",
".git/objects/02/18d4532ace1f4898906e6b48bbd8275a046b64": "6b16fd9839479950721c67928d76229a",
".git/objects/02/f98e79eb3a37c8a480d16a8a2166815ec6d0e7": "9c76af5b4ba7155bea6731df9d61ee5e",
".git/objects/05/18dce4fa2e7439def16c37f827c74ac14cad53": "0e8099d1f9dbb0b38c9e919279be7196",
".git/objects/06/b10d17b8c7f0d9d5308e62a09e2e92b2842f2f": "50a681d747d4dabf85d3993e0929d9f2",
".git/objects/09/a8c77f1900798e1bf6d9d1e93f8509c48843ad": "f37581754ca0c6c0e8e8c7c2bf5fee9a",
".git/objects/09/afb7a0724f1e265ab89f6e7c7b9f42fb5dd446": "27f19b462881c94a9b002aea68fa7f08",
".git/objects/0b/2039c81763adb517043d346b0ccfeee906c250": "9e87c6fbcaac3d5973ed1b5321162971",
".git/objects/0c/70615f71cbe45341d8808e09f531ff47327bff": "b68b5e5046a708497e938b171cb2360b",
".git/objects/0c/808103f63b5b123a734b5f340e6143de49e361": "5dd0dc1bea252370397ef8d27c2ade45",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/116ffa313576fdcd289892b673b5a4d9593ef7": "e2095c23f4c558f3372f2e13a0da31fe",
".git/objects/10/fba7536806106892a5b9f6dac1f7fc4f170331": "40e3cbaa3527c55196864615f4804db7",
".git/objects/15/07b2eda35ea65acf354483b8c71eb0ffe6f4a9": "9565ebc4a1a3b6337fa9bbc782e9b922",
".git/objects/15/157187ecc227925caa00485a56374a463ab179": "d29ac67990944d47f12ce6722c447fb0",
".git/objects/15/1a6e22bf7935396f3f9fa3dc4d7c8761633ed0": "7a49b582a522e9750efad476069efce7",
".git/objects/15/e1d0e22d880a26c9fe69b24603228ae71f6e8b": "c86446186ec4d3d8c104454bb5cbbf91",
".git/objects/16/35ea3a5b544f362f996aea34715ee0a5e95311": "5f9077126a7cfd5a964df30724c93b3c",
".git/objects/17/77e6b4ed689332dec932e9df3b919e4f124de4": "c792c6ae1e6df16e091cd77be8ace596",
".git/objects/18/f5cb9bd710a9ebc9684722d3011715d5fd3449": "f90b9aabeced802da31936fc505e1a95",
".git/objects/1a/5348707947e01ac8e45a99122b9c0944370d61": "772a8294cb29f97f103fe30d5c8aeedf",
".git/objects/1d/08128905f203f6d4e4f121d426f827950f9437": "46cdbb75e92ff2507e82e89f89356efd",
".git/objects/20/0cde7fd7648a66460fd92bd29decfb0610a4c4": "172bf9703200f59acf0ac2b7e52851fc",
".git/objects/20/89f3167a400a5d582d539833c571cae2f98669": "be965a60d5fdba365c50d88fb8fbf202",
".git/objects/20/9373cb8784a664a11057398cfa8ebe1d3d8451": "f895b14ec6a20d4d66c48919705e3ca8",
".git/objects/23/8474c68aa8bf6a0ea00802f7d6485df1e96443": "9cfc0cd9582baf6e37452553b549bed3",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/957fbfe8344554ea6c18205b8b4c9149a122b9": "b90aa23e116ee53657fe4b31a2848747",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2a/0d2b8e6197475f9becf3288357cc27591549a0": "aa8bbf44e31dc4107ce04a7084c7efc8",
".git/objects/2b/c7f348d5efcf878a522d220602e42d7a4dd3ea": "7f7d03bead32250de1c10f158a81d0dc",
".git/objects/2d/00619914c0bd57fbe7510dd833fa498af45a8a": "ad0294b9384a2bf5fb300ebb8822cce5",
".git/objects/2d/6832010299b010000e0ede8fa96b7001c5c825": "599253aedca3acaeb2626cd758248ed7",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/17832904ff4322aabe37337c8294d9b0124e30": "bcf334adc5d46bcad085a495b29a6c67",
".git/objects/32/aca79306b62b450e8abb27bd19f3638dd9e55e": "e5ebc68663589f35a9678bfb5c64484d",
".git/objects/33/33264eb9b8c71324fa6a5aa3953b1c0a04ad43": "13769accb63d0090ab4991aa0b1bd0c2",
".git/objects/33/c73f3fba58288f256bba4e5cd6cfc5fd12df78": "495780a9e9b29d1241190c8ffe9330c0",
".git/objects/34/06f4b6b31fe339bf9f44257455f171150428a9": "fddd0be85e2b7f82da7bee3977be5ed9",
".git/objects/34/b3204feb51f6649fa0e7e60756f96b8ee3c1f6": "8573bd56bccb152f2d4065f2e7dbf18b",
".git/objects/35/072fa50e5ecdd382010f76f9120c83594923f2": "620dd371bef0c87cba88d1351eea4ddd",
".git/objects/36/4ca871128e6976a54167fe22bb64d87bd10925": "fad59b0a6fad9bc7f1993b6e3c5c79f7",
".git/objects/36/712843bd2f6daa0e94360b8414e64ec0e7891b": "6bb96fd405e370d369c7fd44733699a9",
".git/objects/37/81f024c8b43e10058fdfc3287fc78da6c13d48": "defae992c9f1f962a0cb7ce8f5024854",
".git/objects/39/ef293e775def7d367b018dde58d8d8a146c7ed": "f6c31a40e4da460321593862c4b70587",
".git/objects/3a/ea52dc3749072e0fc3795d7d37810c2ffb5092": "71d45ecb7f5c902e7afb5508bae6e8fa",
".git/objects/3d/700d00ac563da765ab69d92c3336851bd800be": "bc44f44db3f67106b1bdaa062aae7d10",
".git/objects/3e/cdeccf4b7176f6730df311e0c4df7280f62923": "d6dfe1963059d091bc24e11b5aadf6ef",
".git/objects/42/f7e58a998eb73664f7e19a7fa3b5ead49f213c": "8a9c01924d3178c6695d35cb5c55cbac",
".git/objects/46/45500ec1e778eaad1f9ba1f82e5f3d9e70158c": "0ac8dc5198c65309ef1e9c107dd3e948",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/08d8f47dcc8e584a61cfc3ce229964d049ce64": "a28acc90353e63fc29d7c5b87d843390",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/43c9c6ac1be98ae4bd2b910518b9e95b5a053a": "227d47cbdb2339600688837fa80e4883",
".git/objects/53/32c143ecf7f89322b31eb4368419923eca0a77": "c610d542646bdd456e8b2c9e57d756f0",
".git/objects/5a/61b157a3eda4a753d14b003dec378c186c8ba3": "6d5714e91c8e25f5b5783433d25d3693",
".git/objects/5a/bc32b6ea44010a8f6f480577ec966cfb0d59ac": "d65ade661deb62dffcdc3df234e12529",
".git/objects/5a/f9140923206527d05b8151896f566b10e1f68c": "4b64140ecb80c3958731d746c6861250",
".git/objects/5b/89b886a81ff1ad9102dda90446afed2f51d34b": "633fe35a5435999717a8e22d1944f1d0",
".git/objects/5b/96a3bc899b47cc9c55acdc3102dfedced947ea": "cba0586a635b3cdf2f7d26b5f7131f49",
".git/objects/5c/6c40c3df25f9a1ba39b43c81729f69d841e20e": "63deab832421cd303a3316494d696c59",
".git/objects/5c/e2899d7713540e22ac8462225bd046ae944409": "1a2940f916ba51b3603876c61ba403a9",
".git/objects/5d/1b7ad49f989b2a6ae6d110490ef1535d2f78ba": "55ebf58fe9ecda5198e3463ee6fc7c23",
".git/objects/5d/64c856740ea4378fbde67ef9495562cec92e2c": "58fa66242e89f074ef2b1e07324c3436",
".git/objects/5e/1ff3d09c7664735575d650602e16a47f878296": "236e50bcef366e39c2f58c878450f76d",
".git/objects/5f/9c546d4c9b90764088be025abec96e49444f64": "7b0b9b920280f71db5f82039adcb64c2",
".git/objects/62/ff59bfd3ab36429e1818b91097aff56a089e1b": "3366a6c74e4efb90622aced9c532de52",
".git/objects/63/0b5989d6bc912274224225b806acd2a77cb6d5": "71af86a94591a48612319ae674ad9012",
".git/objects/67/06a832251d18fc52ff4dd2748f3fbc7187bebd": "346125c182d5e72769b960c82fa4d6b6",
".git/objects/67/2811cd33f0fefd42cfc9343126241936801c63": "a10a6b6b7ffc70e1900e42852c78af99",
".git/objects/68/0a5b24da3471f9db35f124493ec9114e1ca271": "3d06814caf737671e34e0be68ec47df1",
".git/objects/68/e8953a62dc0c1d3d341ac43a8f3d3bc3cc9a33": "7f59835f9ae783445ff764822667491f",
".git/objects/6a/0f279e6a2ba40708ab2ef2a3cdb47c4abc60ce": "58ef43939343d2825505224d9739c131",
".git/objects/6d/e6a37c9e794b66f8ccc63221c7c1835033b771": "506e0bab21981ec135680e3521c5bf8d",
".git/objects/6f/732b7196ab5c237367bb710b43f9f0f0c916bb": "fd35726901f400964b5dc97b7937fd8e",
".git/objects/70/cf7fa1d121dd310c05ddfd495dcb2c867c191d": "15e058aa96186996e08737f0ec56ca7b",
".git/objects/73/a859007d032df5037c898a2ac5602a7e9a7069": "539215d285b23e2607c4eecbce0b5eb1",
".git/objects/74/9a47e2200773384d60f42054eae45b5ecb10ec": "ca83af43a1a468ef3fe307ee4b293e31",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/ba2b4a2c88309f78f226941911866ef2e67b34": "64c1ccd7c86b4b91b3bd9c0565a84193",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/10ffe6ad8b184c736f5b49bd64be57da0533c6": "75a0df24515e67a3ca9e3964b6cb7fe5",
".git/objects/7e/1bba8b819118e12d743d59607a7d5750fd404b": "d6afff0771adca2fb0dd1fbc516dd51c",
".git/objects/7e/54bfbcb96571910e70102d29883bb9d374aa99": "08044f14951ad7f63aaee1dc07396afb",
".git/objects/7f/39e254b59094e90f745b149cef039920eefed2": "5475c4c8df814d038cc274048e2af7d4",
".git/objects/81/eae087884a099553a021e7f969188412274b12": "571ee2eec6a0635400cc0eac5133957b",
".git/objects/82/5df0588b77daefcd50181fe508548db1c69e98": "f5ff38fa2e347fff6ca8921c20d0637c",
".git/objects/86/7faed1b0dc7e74c6e55e7a8179926baab418fe": "03d55920918941aee1caebc2f4058a48",
".git/objects/88/a888512f13cd61a38bcd4891097deb6730bfbe": "356222caa76f310721d2b3f11ac9a0fc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e5905467bffcbe22554c6459522be278573bd0": "4975823a2123a63c93fdcbcd66f02816",
".git/objects/8a/19d9926563b65c6191698cd056ff4580258248": "e195c80c1dbffa2ee9b35f6d63f8bd1e",
".git/objects/8b/84e7b42ad771e6987f96846ef308af8258ec12": "b8b90d03bc1ef57249ff043efa3fafcb",
".git/objects/8b/aa89217bf90a4844e951263cafa0e2cc97b2fb": "ebc5aecd988723cc2fddcd8d5ec6903f",
".git/objects/8b/eb5ca836feed0503d35adbebd6f93939004c7d": "7612db759cbd8c8ebc99b2a66adaa5dd",
".git/objects/8e/2492e2f3d4b9c7502a193c8566d1cddd4a21b0": "7520ff1328ee3b8b2a9eb10717521552",
".git/objects/8e/78668a533982af8d3e633adfede290a9b0b896": "fc4f946c7fbb1a6cd1ac922cca03a57b",
".git/objects/8e/db35ebc18549b80fc3334b58e585f51903cfaf": "7f795c3e706afdfda9d91ebf97af36c0",
".git/objects/8f/202832b23f6085e8ce791a3bcec031bc3a1015": "19e4b728f3d8d27f163e09f564e2e6bf",
".git/objects/8f/29dfb4e445ec4d995904f23eb0fca61d1993cc": "88001b7e35a4d998217836cfd7d4b243",
".git/objects/90/c1e327590605077419ba7c8136a51f5e2fca65": "27a87a7165cf151b3cc9af9f604e13e1",
".git/objects/91/5b7874991347dc276f2acb803d317054204136": "5473bce40510213bf505a8063d13dfb4",
".git/objects/91/89d59d2ac1a8e8526212eaf5688bfc904b54c0": "99e0093f7bfa4d1421534d7daf7e2744",
".git/objects/93/3679acaa53f4543ce930a3b396d9bcc7208390": "339328d527244c9ea798e12eeecce72c",
".git/objects/93/917ca72a02f9742ddb24f729424530194e73bd": "9214c991f3b1c77dcc46c3d8b8df45df",
".git/objects/95/f22045e9d7a2f643b1ede5453511e99e53f302": "affa82a772600c0e5eed74857cf3af04",
".git/objects/96/fbd3d1c7dd4ac08634cb712f10715547c5b123": "7c96140ebb2ed45df56c2cfa205b1bbf",
".git/objects/97/ddd00122a2e3d183144c4ed75c10b86b4882f9": "d9a1f0f5f86673d8e55b5420a8549b06",
".git/objects/9a/1ba3cd60a61729126c2d74d4aa661a307eef39": "758f9b3c125b076579e555827490619d",
".git/objects/9b/819a09a3c562bf52b8b9a41abb5a3d61d63c1e": "b6a27be93b8542c3cc06ac771e2cfddf",
".git/objects/9d/404c564dba659376736849f308eea1f8980edc": "2f2a9ca751a292f9987a71185e8faedd",
".git/objects/9d/eaae20dbbc22a883b6d8bf522800eb1c5bcfbc": "2252390f6672cfee698d014d4145c00e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/3d729aa2368807d0c3060a303a89f089e73b86": "41ee2f6f5763a703b9aadb1457cbbcff",
".git/objects/a8/6b63a6b26eb184261a7a6df560f4f05f72cca9": "0e708691b5adcc1b435343ed5a2c5428",
".git/objects/a8/6d39d4292a2cecf6c4041d6e82b07db5632938": "2140f160f566cef0bcd6779e32561005",
".git/objects/a8/a21e9de5ac54a3798a9ad0731b1816641b87b0": "feea820a6d5256b153c259d3e0174d56",
".git/objects/a9/4fe1a247a326db004aae2560becb8cc8cb1576": "58211f8a70c786e7f98d37f2108272eb",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/bbd21a4041fbc1bf325a1976b860a19b6a9462": "a7563ce21800f3e698c70845dfd38ef7",
".git/objects/ac/3cfa4622dafbdf5205609f659955ed12c693b7": "36c04f025caab7ae06d9a93727db69df",
".git/objects/ad/37961acea3b2fc3565efcc32a89a8db0b5f084": "1acfab26fa9962f1a8a508a2a478230c",
".git/objects/ae/1108e7c6023f41b06086e61cafdc7ce1b4c571": "3c11328f54e975f3f2d49c106f408e82",
".git/objects/ae/487bfc113054e77840929ab95f818329b40794": "df996948433949d75d778852c26bbaf5",
".git/objects/ae/71b075d16e4848c72f5b054fc16a800e0bf602": "e01a376f408752e776abe5ef98b35b68",
".git/objects/ae/f61b03426b8eb6c8c2ccdce6a507dbb9802512": "a8cd78875ce75b6c0deb028c35323216",
".git/objects/af/45a02bd0a6a39ed46888ef5b4e10cd1deadfd5": "baa5bf061f670d652a3d08c6d9a5405d",
".git/objects/b1/769dba970e45518e36eb6908d41733a00b4bc2": "18e68f126613938a236e5c0bb558c8f9",
".git/objects/b2/83b45617c344a321f9c497aa5189928a2ace1c": "edf84952197f6afaf32033d4b1021d37",
".git/objects/b3/820cc50306f3aa7859bda74720c2bbfcde1b7b": "f442aa0c75468fb89e433106393d7030",
".git/objects/b4/78b37bca8989886083404a65769bbdf48382aa": "c72289d583d448166c33d0f5105f2b40",
".git/objects/b5/6e35eecd8bf2a5b442ecd8ff4e2571cf7247a5": "0b7916286a6a1ce2b729862b68805862",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/decc9e462a7c098113e40fb34d4afce081ebb9": "047c286f849c9fc74b484d074c9794de",
".git/objects/b7/e5ba8a2b91e42b8098c6e8ab47ab4aaae914ca": "693e12d60bdf4142119461c37d3ff742",
".git/objects/b7/f50cff4c765313fff62dab740b5517e3cafb9b": "43ad16d050c4a8198ee1a4bd8637c211",
".git/objects/b8/5ec58623ac8b9bc29a57cc509d5c07cdc60e28": "35307cda60466f448c65b73f42805b66",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c4adadc10586b76763db42968b3c360b2fd617": "674dcb3aafd16cc11a9a0f2d2e9c031c",
".git/objects/bb/02ab2664a9d0d11ca3de6148fdc5a3e79ef5da": "da45c2f926fb52ac4f331dbb99aed9f9",
".git/objects/bb/ff45c4762f36000d693fb2d2509426a6d4a63b": "6ef97a1a412d9ac67877e86e08a24602",
".git/objects/be/abc894212fa65ac93780c4b853fc1dadb97654": "7a3a87c6f9c057cd0fe3b876a048ba99",
".git/objects/c1/fc74b60af5911c54932276f09d7019ab905662": "8519e428d0d7e78232fff5daf28c5bae",
".git/objects/c3/0eee2d52b595e43efd1f99674489667aa5016a": "deb0a0f8b03e2ec64c7e8ba20e0360cd",
".git/objects/c6/40bf2b709d632a0be00feebf12ef5757a2c10f": "109d445509b7679987d4f7ea9f0f3968",
".git/objects/c7/a1eddafd4640ad1e90e17f30135106cf80d42b": "c7af4181b899554669fe92017093b9f7",
".git/objects/c8/195f44399f7101e08ef7867c3280e8aa434c93": "d58fc444b73e11eacef3cb81da87f1b4",
".git/objects/cc/241908f31955f6f047d59bdde99372f2d0caf4": "d9071bd7ffcab477611d6e204b858263",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/9e41e3374c6307871fcf2a07910a8b0fd112ac": "560cee5f7ca14dd0bb88e600bdca897e",
".git/objects/cf/5de8d35018524920bd3c3eb2f0fdefa4b1d31c": "1d6931e210b783e357a486a0b9904ac4",
".git/objects/cf/9c0b0d870bcd774f135c9bea25fc25d17b0f18": "484f33696c066f76cf7ef759226b9daa",
".git/objects/cf/ee46bacf4282825f08d79334cda913ceadb799": "fdc197db2e249d25c654983fecae2f16",
".git/objects/d1/18a6ebb531c9b557ee153928d7eb70e7a1e51a": "ccc769918d0b5970f07d916bc48e052e",
".git/objects/d5/0af15c3b667625068512f11da344256d64fbea": "d15cc729fa4affe18e5b975c4991690d",
".git/objects/d5/bdec85ace9205816212768cf1ab3ff792223d8": "79807dd51c548440c304cec3b18db175",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/86a4df54e5fd8f5e48a33822610c5de89518bd": "c7ec62798a3ba67904b7a8bbc650ed66",
".git/objects/da/b77d365618aa4fa9c8021491a7cc32419c549c": "59d99af15801528f9cc1b1c074e20591",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/330c406f3f56b0c428129b750b101b8021f161": "c9c06dd30111208e4b59a9e91ff625a9",
".git/objects/e5/484a8da62e5be3643e23352f545d2a9fa27863": "0a3feb9d97d1f882d9e8bced4757319b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/c947d1a95b97a120fc8703e96db0cf1c32c92b": "b995849c885b15894cd9c53175958038",
".git/objects/e8/2effaef0eaab83dfec67337954e10ba6d18c3b": "3044eb750fa3d71eb4be81c95a0af1ab",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/84aaeb5ec2963834a9aed51bd219cbeda80989": "ef7b6ab5dc8b5f5de37d75e0806a4e44",
".git/objects/ee/50be4eafe5cc4837490ac75b625397ed26bbf7": "860931c5c0b63675443bf60a9dcc074f",
".git/objects/ef/139a6f42e921ed01a5e4125e010824dd244d6c": "b6c6c651613d752ec3f17e09d4478680",
".git/objects/ef/313da40a7bf2e4b7c19422472cefc010cc6e8f": "cdcb1d6a300da359b1fb40142419dd5c",
".git/objects/f0/0b41657211472ba52d66bcb741a1d04db8c9c8": "6aff7df9065c03cae48ddf3c86007720",
".git/objects/f1/1fffe95396d51139a8044ce5fb55b6bda263e7": "87a50659cbf745b4d192b32a34192763",
".git/objects/f2/b371d3a499b793fbd8947f1cf8944d7c162f94": "1bc735e8bc0d7f28a28e51148f3fa0a7",
".git/objects/f3/e53ecc11a620b79f051ad20692d4787c108f80": "f223efc8660c91589d3a4eb4ff0bdb7c",
".git/objects/f5/f02bd4de598b1eaaae7a153e4b6c7de64d04c8": "33606c9a97bd51acf274b0a87489403c",
".git/objects/f7/5c3f556bf9e155acd3640ce55a93f801b33a99": "368502d6ea12c22046d6d04963f5d7ac",
".git/objects/f9/3331d79ef2fabf6b8da3c292f8e657456e786c": "6e83344d3346b2bf7ecd8ffe861a94f2",
".git/objects/f9/9d634d743018cd08d468edf7ddab61cb8c138e": "45a408e4ffaf3f3df13e5af927183022",
".git/objects/fb/128859810ad931d578f6c3ccef599c38472fa2": "74cee16d2a4cd70f071f3261ed8b0bba",
".git/objects/fe/7025bdc385aa7e4481c2bc60455bbf4151defd": "48e7d30bd176017a040d5469241786e4",
".git/objects/ff/d1c2f9b0cc3c834a2a3bbc8f17c9393b148393": "a38bb7329b3ca9a683b077bb067c0122",
".git/refs/heads/master": "82852a027c7e68003d8ba14ffde78dad",
".git/refs/remotes/origin/master": "82852a027c7e68003d8ba14ffde78dad",
"assets/AssetManifest.json": "c56edfd2c9b986c3ff9a5ae60b256b6f",
"assets/assets/CLOUDS.png": "e3ca61281597cbe2771fc8510f49f6e8",
"assets/assets/ICONS/ALL.jpg": "5a5314a1f58cbb5ca86de6c67565c183",
"assets/assets/ICONS/APPLIANCES.png": "10ef9a2855b57ea4b3535268062fc806",
"assets/assets/ICONS/ELECTRONICS.png": "4bf8b184d1a4d02ca0c6260f2ef4e273",
"assets/assets/ICONS/FASHION.png": "78c868560bf8afecd8209c1d189bb815",
"assets/assets/ICONS/FOOD.png": "62194157b686114a751e3d4c0081bb0b",
"assets/assets/ICONS/FURNITURE.png": "d8bf93269d071cdbeec96950adacf586",
"assets/assets/ICONS/GROCERIES.jpg": "fc5d96737181b7f5054701679f929383",
"assets/assets/ICONS/VEG.png": "fd7286f5e8695de9798a1e3a61c59046",
"assets/assets/ICONS/VEG2.jpg": "22904fd190b872ea10a9b21e44697c4a",
"assets/assets/IMAGES/ac.jpg": "8c541338679e1c20fa4c9f15b6280c10",
"assets/assets/IMAGES/addphotos.png": "f9975b29148e8fbc86e654acf12019f0",
"assets/assets/IMAGES/apple.jpg": "c072ed2995e1e28622aa29e671b94863",
"assets/assets/IMAGES/APPLIANCE.png": "52d691bf2b4cdf80eb79ee3c18ee2afb",
"assets/assets/IMAGES/appliancepic.jpg": "01e4c9918506186656dd1fe2a453daf7",
"assets/assets/IMAGES/BAKERY.png": "7e3410b91d8fa7f14b66dbb9ea7d1b0e",
"assets/assets/IMAGES/banana.jpg": "51fa4324a2805f5c6fe54528b84318fd",
"assets/assets/IMAGES/biriyani.jpg": "a441de7aa8d05f446e195e392b31edd2",
"assets/assets/IMAGES/CART2.png": "193925939019863c438e998b7d904975",
"assets/assets/IMAGES/CART3.iix": "6a646c9fabd0a4eb341273ed2cbad1e2",
"assets/assets/IMAGES/CHAIR.jpg": "f978ecfcf6f0e8348048745b190c1914",
"assets/assets/IMAGES/DRESS.png": "7b2864decc03e10ba16345bbb6a103cc",
"assets/assets/IMAGES/elecronicspic.jpg": "9fb31ee75c92840ba98158dfe1f0b807",
"assets/assets/IMAGES/EMPTY.png": "0f9c82736b8a04691ec76c86224384e8",
"assets/assets/IMAGES/FOOD.png": "7e41e8d340bc2af140563f7fe107d321",
"assets/assets/IMAGES/food2.png": "038310a902a6cf0b91a025dd0c06dd6d",
"assets/assets/IMAGES/fried%2520rice.jpg": "545ef08b9c41f196351df2a944d2afdd",
"assets/assets/IMAGES/GROCERY.png": "748ff49d53a332e3d55b1ae7e3d28aa0",
"assets/assets/IMAGES/headphone.jpg": "ac2b35e54ac78751010240a72cdc1a1e",
"assets/assets/IMAGES/laptop.jpg": "215ce049f47e5adab52cbcb055ba5ef5",
"assets/assets/IMAGES/meals.jpg": "c58faf921ace6fda3176a6f8dde21300",
"assets/assets/IMAGES/milk.jpg": "2daef0b923a2e4a3bf446f04c43f8e59",
"assets/assets/IMAGES/mobile.png": "526abfec18a0084d88807873127e786c",
"assets/assets/IMAGES/offer1.jpg.crdownload": "6deae59e1270f6b360977aa05d56f9e8",
"assets/assets/IMAGES/offer2.jpg": "d97497006bb5caeafd82f1666ba64131",
"assets/assets/IMAGES/offer2.webp": "5aa65b45acb30aa7904c0cf6c6aa7ead",
"assets/assets/IMAGES/offer3.jpg": "9f823840e4abe4a7ec178c79bdccd620",
"assets/assets/IMAGES/offer4.jpg_large": "db7027a5fb43c3b6727d29c4acf532e9",
"assets/assets/IMAGES/orange.jpg": "ea67cce3d25683342abef3d671e13f85",
"assets/assets/IMAGES/ORDERS.png": "70c9a52830e3d1b0285fa69f30784db3",
"assets/assets/IMAGES/res1.png": "6d44783ab8dc0059bf15e205bdd8d14c",
"assets/assets/IMAGES/res2.png": "6901f67096172844b27c03aa96c990fd",
"assets/assets/IMAGES/rice.png": "bdf755cf50dc5ba412dff9c3c813af20",
"assets/assets/IMAGES/Screenshot%2520(81).png": "571a06c8059c98a1f4dd074044b17a1f",
"assets/assets/IMAGES/Screenshot%2520(82).png": "64867b4752d5883b227345521568cc60",
"assets/assets/IMAGES/shop1.jpg": "e0282f708f4b48ef116bb96ae9cdc95b",
"assets/assets/IMAGES/shop2.png": "f833e070a363500bbc224fee42b45c1b",
"assets/assets/IMAGES/shop3.png": "bceb6caf8cb5ba9c41135834d1c2579e",
"assets/assets/IMAGES/shop4.jpg": "ad1cfd37b297e1e6db8426659ea41aa1",
"assets/assets/IMAGES/shop5.jpg": "2923edb0532c1ec80e6a9dc0a8f30d83",
"assets/assets/IMAGES/SOFA.jpg": "dde44f53eafee318e7f4e5176ce91059",
"assets/assets/IMAGES/TABLE.jpg": "16199c8f4afb0b97ba6bd8c18d2a2776",
"assets/assets/IMAGES/tv.jpg": "48fd3f7c9a95a8d3f6888f39c98b1bd8",
"assets/assets/IMAGES/washingmachine.jpg": "146d1da2bf7761e4a56093a1193eb938",
"assets/assets/IMAGES/wheat.png": "e8ec0d69b94e65ef2a8a4cc9cb965041",
"assets/assets/LOGO.png": "70b5c48da6b375d96db9ce5cb94a79fb",
"assets/assets/LOGO1.png": "a4aa728f8e4a4036cbe71d19853c520b",
"assets/assets/LOGO2.png": "a76f9f7a6b191a7c1891be1c8a49b4ed",
"assets/assets/SHOPS/65.jpg": "7d6164f27657202f62c54329023f9e63",
"assets/assets/SHOPS/ac.jpg": "5640c23996239e574e6789b367f837e1",
"assets/assets/SHOPS/apple.jpg": "44021295e4a855a395377e7bd40b6728",
"assets/assets/SHOPS/boxers.jpg": "a300361382256bcd4ed6c987fd7dfbe2",
"assets/assets/SHOPS/bulb.jpg": "b7941d7ad8379af42299a68712437aa2",
"assets/assets/SHOPS/camera.jpg": "1f6861e8850a70a0f6aacbacbb6739a1",
"assets/assets/SHOPS/cap.jpg": "97b137f6b3b5b02afa274aa3ad5a1b63",
"assets/assets/SHOPS/chair.jpg": "560ea62b6efb044a942aae9be21e9102",
"assets/assets/SHOPS/cherry.jpg": "1ecdcdfb0f9ca37298446af75390ddc1",
"assets/assets/SHOPS/chickenbiryani.jpg": "2d27bc6bd4b04102d50178d030c668e2",
"assets/assets/SHOPS/chudidhar.jpg": "97ebf94594dd6cb2466fbcc569966968",
"assets/assets/SHOPS/date.jpg": "f75ab764b8c762fbcccd30c8c4f805b3",
"assets/assets/SHOPS/dosa.jpg": "b3a1c94dd73f1152decf952375434bae",
"assets/assets/SHOPS/Dustbin.jpg": "711610cfed48fe5b1ebd79807a45a352",
"assets/assets/SHOPS/eggbiryani.jpg": "a5deabd33c0fc87592e4f559113ccee5",
"assets/assets/SHOPS/fan.jpg": "fa571822be70844aebb29bf72e78f79b",
"assets/assets/SHOPS/fridge.jpg": "b0d3218e75e2e231317f52f4e31dbc42",
"assets/assets/SHOPS/ghee.jpg": "c7b34ffa40bf63057d9f5e47071fd993",
"assets/assets/SHOPS/grill.jpg": "947c90374c76f4938354e83cda272cd0",
"assets/assets/SHOPS/grinder.jpg": "1e2325d5c8c90f8b6a8b7cc224b47ff8",
"assets/assets/SHOPS/headphone.jpg": "ae067a47c0839b8cd0d6f28f6bb44e3c",
"assets/assets/SHOPS/jeans.jpg": "480918de83e4d388e228b01512b42037",
"assets/assets/SHOPS/juicer.jpg": "406570c87840b51cad76331bf7356583",
"assets/assets/SHOPS/kichdi.jpg": "a569e72d005287992523d650a228d32f",
"assets/assets/SHOPS/kidshirt.jpg": "a094c9af4e204096722540642ed4c7b6",
"assets/assets/SHOPS/laptop.jpg": "f8bf70c8c94b66157047caeaf9caff05",
"assets/assets/SHOPS/lemon.jpg": "8b0e96212c6c5887369315a59c5823eb",
"assets/assets/SHOPS/maida.jpg": "53be296016fe3f577249026c8504d7af",
"assets/assets/SHOPS/mango.jpg": "81264eb863133fd408fb0d990a2095f3",
"assets/assets/SHOPS/menshirt.jpg": "7cb5041ade8d0f3be494c6119aa21271",
"assets/assets/SHOPS/monitor.jpg": "915db1c2181ba7d78599423484b8955f",
"assets/assets/SHOPS/muttonbiryani.jpg": "78121c70352c8bb7924e74ff0a12d887",
"assets/assets/SHOPS/noodles.jpg": "9ec26cc609794c065f729efbf39bbef0",
"assets/assets/SHOPS/Notebook.jpg": "2d2f2a4546ae002a7cd26bb8ca05a49f",
"assets/assets/SHOPS/pasta.jpg": "eb93ebdc21be13d0d19448ed7aebdaaf",
"assets/assets/SHOPS/pear.jpg": "97fc022d2502f724d36e15dbdcc06db0",
"assets/assets/SHOPS/Pen.jpg": "02de5654316e2bacf51caf2977363a1f",
"assets/assets/SHOPS/pendrive.jpg": "95d16a55c8f0f2ad947090e55f785e83",
"assets/assets/SHOPS/phone.jpg": "f985f73795f01b3cb969142ccb3b6f76",
"assets/assets/SHOPS/plum.jpg": "048989a9c98da9bb4ee7258099d30405",
"assets/assets/SHOPS/Pouch.jpg": "523cb39bddbe2d40ac0d1269d91a0ad5",
"assets/assets/SHOPS/printer.jpg": "d9e7634f909932e1fe07bc7b8c0ed794",
"assets/assets/SHOPS/rice.jpg": "77200541ef103519555917232bd26ac6",
"assets/assets/SHOPS/riceeat.jpg": "28ddb0ab47ed38ba9401f4cf5e3cb704",
"assets/assets/SHOPS/salt.jpg": "a99f0175a119b8eecdeec2d560f2001d",
"assets/assets/SHOPS/sapota.jpg": "6df8ee854eb579713f8a2ccca4b3f779",
"assets/assets/SHOPS/saree.jpg": "5f44910f6f66ddf39184ddd186f8cad3",
"assets/assets/SHOPS/shop1.jpg": "e0282f708f4b48ef116bb96ae9cdc95b",
"assets/assets/SHOPS/shop10.jpg": "7199114b73aa3492cd4c7c33219f7867",
"assets/assets/SHOPS/shop11.jpg": "04fb7e96a7fc03f20996bb87d398d1b6",
"assets/assets/SHOPS/shop12.jpg": "7e4490a34bb2eb3e8f951f03de36a6e6",
"assets/assets/SHOPS/shop13.jpg": "0d3471a2678f20dec33b91c1c2ed57b9",
"assets/assets/SHOPS/shop14.jpg": "647e9612264facd35428e4642b58a68c",
"assets/assets/SHOPS/shop15.jpg": "7e90e1e3da5da61cf55c2e47f6300d9c",
"assets/assets/SHOPS/shop16.jpg": "595cc7d0a92b6ab0c214fdffa3d7f7ba",
"assets/assets/SHOPS/shop17.jpg": "17b90c9eb194a3ca1900f2386efcf973",
"assets/assets/SHOPS/shop18.jpg": "8791eb707dbff8fa7eb7bd0ff50e0138",
"assets/assets/SHOPS/shop19.jpg": "dc497a840243c5e7d2652102a4ddffec",
"assets/assets/SHOPS/shop2.jpg": "e48ac13400364a1e87c4fd175a71647d",
"assets/assets/SHOPS/shop20.jpg": "eb76298e41be838d7279155acf86f4e0",
"assets/assets/SHOPS/shop21.jpg": "f7693ecc41c089a78dfc2334b464570f",
"assets/assets/SHOPS/shop22.jpg": "06a3af5c7c57b662d184295772a2749d",
"assets/assets/SHOPS/shop23.jpg": "2163237ee48063ddff5b66dbbaa0e60e",
"assets/assets/SHOPS/shop24.jpg": "30751e6bf3db9200f854e909e104a5a1",
"assets/assets/SHOPS/shop25.jpg": "51705db2c0c1c4d05798b039c2b2682b",
"assets/assets/SHOPS/shop26.jpg": "cd59fff72b6754886cb3eb0edb328e29",
"assets/assets/SHOPS/shop27.jpg": "fc1270766d708686037bc0c9dad0f7cf",
"assets/assets/SHOPS/shop28.jpg": "e97aeb222ed43a00e146d5c30edfd794",
"assets/assets/SHOPS/shop29.jpg": "d537e0117273af98a31cc148873bd95f",
"assets/assets/SHOPS/shop3.jpg": "18172ea6698afdcf8acb9d96545b56d1",
"assets/assets/SHOPS/shop30.jpg": "9d4b37030b686ffd32d2fb78dbbd889f",
"assets/assets/SHOPS/shop31.jpg": "80e8a83fe05ba89d209950e9d9c3b69b",
"assets/assets/SHOPS/shop32.jpg": "eb25bd9cfaa6ba45e6cd646c10f1106f",
"assets/assets/SHOPS/shop33.jpg": "9926b608c497fbe0ee686dba830ca504",
"assets/assets/SHOPS/shop34.jpg": "d8da1101d23481645cd436c0b400d090",
"assets/assets/SHOPS/shop35.jpg": "1900fe54db26f763b283af9950577410",
"assets/assets/SHOPS/shop4.jpg": "13e9818fa8c0207e1297e091d679ed25",
"assets/assets/SHOPS/shop5.png": "f833e070a363500bbc224fee42b45c1b",
"assets/assets/SHOPS/shop6.png": "bceb6caf8cb5ba9c41135834d1c2579e",
"assets/assets/SHOPS/shop7.jpg": "166c366f4daeb0f7a94014fcf286b0d7",
"assets/assets/SHOPS/shop8.jpg": "ba76dde060e10d7e7038c34556fd98fc",
"assets/assets/SHOPS/shop9.jpg": "f094f2e2171476aa7ba24f9ff7a80abb",
"assets/assets/SHOPS/Sofa.jpg": "b2a5f6487adb4c6dae46b38f9edff5e8",
"assets/assets/SHOPS/sugar.jpg": "5490c325e8fea188fe444d9472fb3448",
"assets/assets/SHOPS/Suitcase.jpg": "d1a230bc2241de2e2ced3890d19f7198",
"assets/assets/SHOPS/table.jpg": "220073ea5726b0c7ac3fc1efb1706696",
"assets/assets/SHOPS/tshirt.jpg": "b131bf1afdbfb05d1c42e4f82816e6a8",
"assets/assets/SHOPS/tv.jpg": "4ab767890883f209e4e3f2c9c9b5151f",
"assets/assets/SHOPS/washing.jpg": "28fe52911778c02e603b848b24d5bde1",
"assets/assets/SHOPS/watch.jpg": "a28d2372b089c623f698dbc5e5085272",
"assets/assets/SHOPS/wheat.jpg": "31a2e65e1dff0e0c071bae4d6c04b43e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2163a8712432c81a5e5d54c87d49d50d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "5f15fcff998ac635f96ab4d36135dc7d",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a547678859f76c159a2814d843931035",
"/": "a547678859f76c159a2814d843931035",
"main.dart.js": "d1c16a942394144e4f62153d79f9b6b5",
"manifest.json": "794a978920a0082c52eb645f3c6c6d1a",
"version.json": "02f7a9d56852139fc2b326d0064254f6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
