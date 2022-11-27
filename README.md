# JSDefender Deobfuscator
### A simple algorithm to unobfuscate obfuscated code with [JSDefender](https://www.preemptive.com/products/jsdefender/)
![image](https://cdn.discordapp.com/attachments/1025769112221270050/1040394825561808896/image.png)

### How does the obfuscator work? 

![image](https://cdn.discordapp.com/attachments/1013995486883094590/1014247735307804692/unknown.png)

 * line 1 : create a variable named Kqsib without assigning values to it
 * line 2 : creation of a function
 * line 3 : creation of a constant used in the part executed in the line below
 * line 4 : an executed code containing an encrypted program (which I did not show on the screen because it was too big)
 * line 5 : my called function
 * line 6 : my real program

If we look at line 6 containing the real program, we can see that new values have appeared such as `Kqsib.C01db(0)` and `Kqsib.uQRdb(1)`, if we try to display them on the console we will get : </br>
Kqsib.C01db(0) = "log"</br>
Kqsib.uQRdb(1) = "Hello World"</br>
these values are assigned in the program run in eval, so we'll replace eval with console.log to really see what's there</br>

![image](https://cdn.discordapp.com/attachments/1013995486883094590/1014254253633716282/unknown.png)

(the numbered part is replaced by CRYPTED because it is really too big)

if we put this part that is executed in plain text we get : 

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

 * `IM3D` : this is the main function which contains the `LhVt` and `D9hu` functions and which allows the decrypted program to be executed
 * `LhVt` : this is a hash function (not secure)
 * `D9hu` : it is an XOR function allowing to decrypt "CRYPTED"

You're probably wondering what a hash function `LhVt` is for? </br>
Simply because the hash of the `IM3D` function is the decryption key of "CRYPTED".</br>
This is useful because now if we try to run the code in clear text or the code by replacing the eval with a console.log, the hash will be different so the encryption will be corrupted...

But then how do you get the number part right?

it's easy! All you need to do is : 
 * resume the function intact 

```javascript
function IM3D(r2aw){const Tr5t=D9hu(r2aw,LhVt(IM3D.toString()));try{let vZ7t=eval(Tr5t);return vZ7t.apply(null,wN4H);}catch(Pm0t){var rU2t=(0o202070-66604);while(rU2t<(0o400126%65560))switch(rU2t){case (0x30051%0o200027):rU2t=Pm0t instanceof SyntaxError?(0o400177%0x1002D):(0o400130%0x10019);break;case (0o202126-0x10431):rU2t=(0o400144%65567);{console.log('Error: the code has been tampered!');return}break;}throw Pm0t;}function LhVt(nPXt){let HcQt=1119680920;var jKSt=(0o400075%65550);{let jMpu;while(jKSt<(0x10550-0o202456)){switch(jKSt){case (0o600042%0x10006):jKSt=(68896-0o206404);{HcQt^=(nPXt.charCodeAt(jMpu)*(15658734^0O73567354)+nPXt.charCodeAt(jMpu>>>(0x4A5D0CE&0O320423424)))^78040585;}break;case (0o205360-68308):jKSt=(131133%0o200026);jMpu++;break;case (262277%0o200035):jKSt=jMpu<nPXt.length?(0o400062%0x10011):(67916-0o204452);break;case (0o1000121%0x1000C):jKSt=(0o202246-0x10495);jMpu=(0x75bcd15-0O726746425);break;}}}let Ljsu="";var fHku=(66276-0o201277);{let Henu;while(fHku<(0o600173%0x1001C)){switch(fHku){case (0o600246%65579):fHku=(0x2002D%0o200022);Henu=(0x21786%3);break;case (0o200264-0x100AB):fHku=Henu<(0O347010110&0x463A71D)?(73639709%9):(0o207474-69397);break;case (0O347010110&0x463A71D):fHku=(0o203016-67055);{const bCfu=HcQt%(0o1000162%0x10015);HcQt=Math.floor(HcQt/(0x10834-0o204026));Ljsu+=bCfu>=(0o600150%65562)?String.fromCharCode((0o1000441%0x10038)+(bCfu-(0o204040-0x10806))):String.fromCharCode((0o215206-72229)+bCfu);}break;case (0o201642-0x10383):fHku=(196641%0o200010);Henu++;break;}}}return Ljsu;}function D9hu(Xwau,z4cu){Xwau=decodeURI(Xwau);let z6Ju=(0x21786%3);let bEMu="";var v1Eu=(0o204406-0x108E5);{let XyHu;while(v1Eu<(0o200524-65842)){switch(v1Eu){case (0o200500-65840):v1Eu=(0o201060-66068);{bEMu+=String.fromCharCode(Xwau.charCodeAt(XyHu)^z4cu.charCodeAt(z6Ju));z6Ju++;var rWzu=(0x10294-0o201176);while(rWzu<(0x104D8-0o202271))switch(rWzu){case (0o600075%0x1000D):rWzu=z6Ju>=z4cu.length?(0x3005A%0o200027):(0o400173%65582);break;case (67006-0o202651):rWzu=(0o600243%65580);{z6Ju=(0x21786%3);}break;}}break;case (67406-0o203475):v1Eu=XyHu<Xwau.length?(0o1000130%65554):(67916-0o204452);break;case (67516-0o203633):v1Eu=(0o1000175%65563);XyHu=(0x21786%3);break;case (0x40084%0o200032):v1Eu=(0x30065%0o200034);XyHu++;break;}}}return bEMu;}}
```

* rename our function in clear that we want to modify because it will already be defined x))
* and replace the eval of the function to be modified by a console.log

![image](https://cdn.discordapp.com/attachments/1013995486883094590/1014270637298176030/unknown.png)

all that remains is to launch the program: 

![image](https://cdn.discordapp.com/attachments/1013995486883094590/1014271933837221918/unknown.png)

And if you put the code in plain text : 

![image](https://cdn.discordapp.com/attachments/1013995486883094590/1014273771055620267/unknown.png)

And here is the program to assign all the values :))) 

### How does the deobfuscator work?

The deobfuscator works on dynamic analysis, it removes the basic program (in case there is malware) and keeps only the encrypted program, it evaluates the encrypted program and gets all the values, once all the values are recovered it puts them back in their places... that's enough to deobfuscate the program and reconstruct it almost perfectly ^^ 

### How to start JSDefender-Deobfuscator ? 

```sh
$ npm install electron -g
$ electron .
``` 
