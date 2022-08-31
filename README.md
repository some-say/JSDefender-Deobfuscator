# JSDefender Deobfuscator
### Un simple algorithme permettant de déobfusquer du code obfusqué avec [JSDefender](https://www.preemptive.com/products/jsdefender/)
![image](https://cdn.discordapp.com/attachments/863482336612319272/1014241854801313894/unknown.png)

### Comment fonctionne l'obfuscateur ? 

![image](https://cdn.discordapp.com/attachments/1013995486883094590/1014247735307804692/unknown.png)

* ligne 1 : création d'une variable du nom de Kqsib sans lui assigner de valeurs
* ligne 2 : création d'une fonction 
* ligne 3 : création d'une constante utilisée dans la partie exécutée dans la ligne en dessous
* ligne 4 : un code exécuté contenant un programme chiffré (que je n'ai pas montré sur le screen car il était trop gros)
* ligne 5 : ma fonction appelée
* ligne 6 : mon réel programme

Si on regarde la ligne 5 contenant le réel programme, on peut voir que de nouvelles valeurs sont apparues comme `Kqsib.C01db(0)` et `Kqsib.uQRdb(1)`, si on essaie de les afficher sur la console on aura : </br>
Kqsib.C01db(0) = "log"</br>
Kqsib.uQRdb(1) = "Hello World"</br>
ces valeurs sont assignées dans le programme exécuté dans l'eval, on va donc remplacer eval par console.log pour voir réellement ce qu'il y a </br>

![image](https://cdn.discordapp.com/attachments/1013995486883094590/1014254253633716282/unknown.png)

(la partie chiffrée est remplacée par CRYPTED car c'est vraiment trop gros)

si on met cette partie qui est exécutée en clair on obtient : 

```javascript
(function IM3D(r2aw) {
    const Tr5t = D9hu(r2aw, LhVt(IM3D.toString()));
    try {
        let vZ7t = eval(Tr5t);
        return vZ7t.apply(null, wN4H);
    } catch (Pm0t) {
        var rU2t = (0o202070 - 66604);
        while (rU2t < (0o400126 % 65560)) switch (rU2t) {
            case (0x30051 % 0o200027):
                rU2t = Pm0t instanceof SyntaxError ? (0o400177 % 0x1002D) : (0o400130 % 0x10019);
                break;
            case (0o202126 - 0x10431):
                rU2t = (0o400144 % 65567); {
                    console.log('Error: the code has been tampered!');
                    return
                }
                break;
        }
        throw Pm0t;
    }

    function LhVt(nPXt) {
        let HcQt = 1119680920;
        var jKSt = (0o400075 % 65550); {
            let jMpu;
            while (jKSt < (0x10550 - 0o202456)) {
                switch (jKSt) {
                    case (0o600042 % 0x10006):
                        jKSt = (68896 - 0o206404); {
                            HcQt ^= (nPXt.charCodeAt(jMpu) * (15658734 ^ 0O73567354) + nPXt.charCodeAt(jMpu >>> (0x4A5D0CE & 0O320423424))) ^ 78040585;
                        }
                        break;
                    case (0o205360 - 68308):
                        jKSt = (131133 % 0o200026);
                        jMpu++;
                        break;
                    case (262277 % 0o200035):
                        jKSt = jMpu < nPXt.length ? (0o400062 % 0x10011) : (67916 - 0o204452);
                        break;
                    case (0o1000121 % 0x1000C):
                        jKSt = (0o202246 - 0x10495);
                        jMpu = (0x75bcd15 - 0O726746425);
                        break;
                }
            }
        }
        let Ljsu = "";
        var fHku = (66276 - 0o201277); {
            let Henu;
            while (fHku < (0o600173 % 0x1001C)) {
                switch (fHku) {
                    case (0o600246 % 65579):
                        fHku = (0x2002D % 0o200022);
                        Henu = (0x21786 % 3);
                        break;
                    case (0o200264 - 0x100AB):
                        fHku = Henu < (0O347010110 & 0x463A71D) ? (73639709 % 9) : (0o207474 - 69397);
                        break;
                    case (0O347010110 & 0x463A71D):
                        fHku = (0o203016 - 67055); {
                            const bCfu = HcQt % (0o1000162 % 0x10015);
                            HcQt = Math.floor(HcQt / (0x10834 - 0o204026));
                            Ljsu += bCfu >= (0o600150 % 65562) ? String.fromCharCode((0o1000441 % 0x10038) + (bCfu - (0o204040 - 0x10806))) : String.fromCharCode((0o215206 - 72229) + bCfu);
                        }
                        break;
                    case (0o201642 - 0x10383):
                        fHku = (196641 % 0o200010);
                        Henu++;
                        break;
                }
            }
        }
        return Ljsu;
    }

    function D9hu(Xwau, z4cu) {
        Xwau = decodeURI(Xwau);
        let z6Ju = (0x21786 % 3);
        let bEMu = "";
        var v1Eu = (0o204406 - 0x108E5); {
            let XyHu;
            while (v1Eu < (0o200524 - 65842)) {
                switch (v1Eu) {
                    case (0o200500 - 65840):
                        v1Eu = (0o201060 - 66068); {
                            bEMu += String.fromCharCode(Xwau.charCodeAt(XyHu) ^ z4cu.charCodeAt(z6Ju));
                            z6Ju++;
                            var rWzu = (0x10294 - 0o201176);
                            while (rWzu < (0x104D8 - 0o202271)) switch (rWzu) {
                                case (0o600075 % 0x1000D):
                                    rWzu = z6Ju >= z4cu.length ? (0x3005A % 0o200027) : (0o400173 % 65582);
                                    break;
                                case (67006 - 0o202651):
                                    rWzu = (0o600243 % 65580); {
                                        z6Ju = (0x21786 % 3);
                                    }
                                    break;
                            }
                        }
                        break;
                    case (67406 - 0o203475):
                        v1Eu = XyHu < Xwau.length ? (0o1000130 % 65554) : (67916 - 0o204452);
                        break;
                    case (67516 - 0o203633):
                        v1Eu = (0o1000175 % 65563);
                        XyHu = (0x21786 % 3);
                        break;
                    case (0x40084 % 0o200032):
                        v1Eu = (0x30065 % 0o200034);
                        XyHu++;
                        break;
                }
            }
        }
        return bEMu;
    }
})("CRYPTED")
```

* `IM3D` : c'est la fonction principale celle qui permet de déchiffrer "CRYPTED"
* `LhVt` : c'est une fonction de hashage (non sécurisée)
* `D9hu` : c'est une fonction XOR permettant de déchiffrer "CRYPTED"

Vous allez sûrement vous dire à quoi sert une fonction de hashage `LhVt` ? </br>
Tout simplement car le hash de la fonction `IM3D` c'est la clé de déchiffrement de "CRYPTED"</br>
C'est utile car maintenant si on essaie d'exécuter le code en clair ou le code en remplacant l'eval par un console.log, le hash sera différent donc le chiffrement sera corrompu...

Mais alors comment réussir à obtenir la partie chiffrée ? 

c'est simple ! Il suffit juste de : 
* reprendre la fonction intacte 

```javascript
function IM3D(r2aw){const Tr5t=D9hu(r2aw,LhVt(IM3D.toString()));try{let vZ7t=eval(Tr5t);return vZ7t.apply(null,wN4H);}catch(Pm0t){var rU2t=(0o202070-66604);while(rU2t<(0o400126%65560))switch(rU2t){case (0x30051%0o200027):rU2t=Pm0t instanceof SyntaxError?(0o400177%0x1002D):(0o400130%0x10019);break;case (0o202126-0x10431):rU2t=(0o400144%65567);{console.log('Error: the code has been tampered!');return}break;}throw Pm0t;}function LhVt(nPXt){let HcQt=1119680920;var jKSt=(0o400075%65550);{let jMpu;while(jKSt<(0x10550-0o202456)){switch(jKSt){case (0o600042%0x10006):jKSt=(68896-0o206404);{HcQt^=(nPXt.charCodeAt(jMpu)*(15658734^0O73567354)+nPXt.charCodeAt(jMpu>>>(0x4A5D0CE&0O320423424)))^78040585;}break;case (0o205360-68308):jKSt=(131133%0o200026);jMpu++;break;case (262277%0o200035):jKSt=jMpu<nPXt.length?(0o400062%0x10011):(67916-0o204452);break;case (0o1000121%0x1000C):jKSt=(0o202246-0x10495);jMpu=(0x75bcd15-0O726746425);break;}}}let Ljsu="";var fHku=(66276-0o201277);{let Henu;while(fHku<(0o600173%0x1001C)){switch(fHku){case (0o600246%65579):fHku=(0x2002D%0o200022);Henu=(0x21786%3);break;case (0o200264-0x100AB):fHku=Henu<(0O347010110&0x463A71D)?(73639709%9):(0o207474-69397);break;case (0O347010110&0x463A71D):fHku=(0o203016-67055);{const bCfu=HcQt%(0o1000162%0x10015);HcQt=Math.floor(HcQt/(0x10834-0o204026));Ljsu+=bCfu>=(0o600150%65562)?String.fromCharCode((0o1000441%0x10038)+(bCfu-(0o204040-0x10806))):String.fromCharCode((0o215206-72229)+bCfu);}break;case (0o201642-0x10383):fHku=(196641%0o200010);Henu++;break;}}}return Ljsu;}function D9hu(Xwau,z4cu){Xwau=decodeURI(Xwau);let z6Ju=(0x21786%3);let bEMu="";var v1Eu=(0o204406-0x108E5);{let XyHu;while(v1Eu<(0o200524-65842)){switch(v1Eu){case (0o200500-65840):v1Eu=(0o201060-66068);{bEMu+=String.fromCharCode(Xwau.charCodeAt(XyHu)^z4cu.charCodeAt(z6Ju));z6Ju++;var rWzu=(0x10294-0o201176);while(rWzu<(0x104D8-0o202271))switch(rWzu){case (0o600075%0x1000D):rWzu=z6Ju>=z4cu.length?(0x3005A%0o200027):(0o400173%65582);break;case (67006-0o202651):rWzu=(0o600243%65580);{z6Ju=(0x21786%3);}break;}}break;case (67406-0o203475):v1Eu=XyHu<Xwau.length?(0o1000130%65554):(67916-0o204452);break;case (67516-0o203633):v1Eu=(0o1000175%65563);XyHu=(0x21786%3);break;case (0x40084%0o200032):v1Eu=(0x30065%0o200034);XyHu++;break;}}}return bEMu;}}
```

* De renommer notre fonction en clair qu'on veut modifier car elle sera déjà définit x))
* Et de remplacer l'eval de la fonction à modifier par un console.log

![image](https://cdn.discordapp.com/attachments/1013995486883094590/1014270637298176030/unknown.png)

il reste plus qu'à lancer le programme : 

![image](https://cdn.discordapp.com/attachments/1013995486883094590/1014271933837221918/unknown.png)

Et si on met le code en clair : 

![image](https://cdn.discordapp.com/attachments/1013995486883094590/1014273771055620267/unknown.png)

Et voici le programme permettant d'assigner toutes les valeurs :))) 

### Comment fonctionne le deobfuscateur ?

Le déobfuscateur lui fonctionne sur de l'analyse dynamique, il remove le programme de base (au cas où il y aurait un malware) et garde seulement le programme chiffré, il eval le programme chiffré et get toutes les valeurs, une fois toutes les valeurs récupérées il les remet à leurs places... ça suffit pour déobfusquer le programme et le reconstituer presque parfaitement ^^ 