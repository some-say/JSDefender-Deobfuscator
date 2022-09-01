const fs = require("fs"),
    bf = require("js-beautify"),
    champiName = require("../name.json"),
    deobfuscate = (input) => {
        var code = bf(input, {
                indent_size: 2,
                space_in_empty_paren: true
            }),
            line = code.replace(/\r/gi, "").split("\n");
        for (let i = 0; i < line.length; i++)
            if (line[i].startsWith("//")) line.splice(i, 1)
        var name = line[0].split("let ").reverse().join("").split(";").reverse().join(""),
            funcA = line[1] + "\n" + line[2] + "\n" + line[3] + "\n" + line[4] + "\n",
            val = /([A-Za-z0-9]*\.[A-Za-z0-9]*\([0-9]*\))/g,
            clearV = /(([A-Za-z0-9]+|\))\[\"([0-9A-Za-z_]*)\"\])/g,
            allV = {},
            allF = [];
        delete line[0], delete line[1], delete line[2], delete line[3], delete line[4];
        var newCode = line.join("\n"),
            varN = {},
            varF = [],
            varT = "",
            varC = 0;
        newCode.split("").forEach(char => {
            var byte = char.charCodeAt()
            if (0x15E0 < byte && byte < 0x1770 || 0x2AF8 < byte && byte < 0x2C88 || 0x2C88 < byte && byte < 0x2E18) {
                varT += char;
                if (varT.length == 4) {
                    varN["" + varT] = champiName[varC]
                    varF.push(varT)
                    varT = ""
                    varC++
                }
            }
        })
        varF.forEach(str => {
            newCode = newCode.replace(new RegExp(str, "gi"), varN["" + str]);
        })

        function replaceVal(obfuscated) {
            if (obfuscated.match(val)) {
                obfuscated.match(val).forEach(value => {
                    if (value.startsWith(name)) {
                        allF.push("\"" + value + "\"")
                    }
                })
                allV = eval(line[0] + "\n" + funcA + "var xD = {};\nvar allF = [" + allF + "];\nallF.forEach(val => {xD[\"\"+val]=eval(val)});\nxD")
                allF.forEach(v => {
                    if (typeof allV["" + v] == "number" | "boolean") {
                        newCode = newCode.replace(v, allV["" + v])
                    } else if (typeof allV["" + v] == "string") {
                        var newVal = allV["" + v].replace(/\\/g, "\\\\").replace(/\"/g, "\\\"").replace(/\r/gi, "").split("\n").join("\\n")
                        newCode = newCode.replace(v, '"' + newVal + '"')
                    }
                })
            } else {
                return false;
            }
        }(code)
        var numberReg = /(((0x|0X)[0-9A-Fa-f]*)|((0o|0O)[0-7]*)|((0b|0B)[01]*))/g
        if (newCode.match(numberReg)) {
            newCode.match(numberReg).forEach(int => {
                if (Number(int)) {
                    newCode = newCode.replace(new RegExp(int, "g"), Number(int))
                }
            })
        }
        var calcReg = /(\([0-9]* [-+/*^&%] [0-9]*\))/g
        if (newCode.match(calcReg)) {
            newCode.match(calcReg).forEach(calc => {
                newCode = newCode.replace(new RegExp(calc.replace(/\^/g, "\\^").replace(/\-/g, "\\-").replace(/\+/g, "\\+").replace(/\*/g, "\\*").replace(/\%/g, "\\%").replace(/\&/g, "\\&").replace(/\(/g, "\\(").replace(/\)/g, "\\)"), "g"), Number(eval(calc)))
            })
        }

        function clear1() {
            newCode.match(clearV).forEach(hihi => {
                var b = hihi.split("[\"").reverse()[0].split("\"]").join(""),
                    a = hihi.split("[\"")[0]
                newCode = newCode.replace(hihi, a + "." + b)
            })
        }
        var z = 0;
        setInterval(() => {
            if (z == 0) {
                if (newCode.match(clearV)) {
                    clear1()
                } else {
                    z = 1
                    replaceVal(newCode)
                    var y = 0;
                    setInterval(() => {
                        if (y == 0) {
                            if (newCode.match(clearV)) {
                                clear1()
                            } else {
                                y = 1
                                replaceVal(newCode)
                                document.getElementById("output").value = bf(newCode, {
                                    indent_size: 2,
                                    space_in_empty_paren: true
                                })
                            }
                        }
                    });
                }
            }
        });
    },
    dropHandler = (ev) => {
        ev.preventDefault();
        if (ev.dataTransfer.items) {
            for (var i = 0; i < ev.dataTransfer.items.length; i++) {
                if (ev.dataTransfer.items[i].kind === 'file') {
                    var file = ev.dataTransfer.items[i].getAsFile();
                    fs.readFile(file.path, "utf8", (err, data) => {
                        if (!err) {
                            document.getElementById("input").value = data
                        }
                    })
                }
            }
        } else {
            for (var i = 0; i < ev.dataTransfer.files.length; i++) {
                sendFile(ev.dataTransfer.files[i].path, ev.dataTransfer.files[i].name)
            }
        }
    },
    dragOverHandler = (ev) => {
        ev.preventDefault();
    };