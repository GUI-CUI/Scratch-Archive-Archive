const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACcSURBVGhD7dpBCoAgEEbhsTt2yg5pG1dWDoHEk94HkqvqJ5WRLFH3GgO1HK3HtrXr8gxCYxCa/wQpkJZxaNEYhMYgNGn1G0/Vb91bpxlUyeMHXN0tt9k9HFo0BnmjLzf6NoNfhMYgNAahMQiNQWgMQmMQmnlb3ZHkZ1H/AnelvVvd1ThHvuYcWY1BaH60akFkR0kcWjQGoTEIS8QJmosagGmnJo0AAAAASUVORK5CYII=";
class Lucky {

  constructor() {
    this.maps = {'my dictionary':{'hello':'world'}};
    console.log(Scratch);
  }

  _getMaps() {
    return Object.keys(this.maps).map(key => {
      return {text: key, value: key}
    });
  }

  getInfo() {
    return {
      id: 'Lucky',
      name: 'Lucky7 Blocks',

      colour: '#13F224',
      colourSecondary: '#12d721',
      colourTertiary: '#28b432',

      menuIconURI: icon,
      blockIconURI: icon,

      blocks: [
        {
          opcode: 'ReportStringReporter',
          blockType: Scratch.BlockType.REPORTER,
          text: 'report [KEY]',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'thing'
            }
          }
        },
        {
          opcode: 'ReportStringBoolean',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'report [KEY]',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'true'
            }
          }
        },
        {
          opcode: 'CreateVar',
          blockType: Scratch.BlockType.COMMAND,
          text: 'create local variable [KEY] and set to [VALUE]',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'var'
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0'
            }
          }
        },
        {
          opcode: 'setKeyOfMap',
          blockType: Scratch.BlockType.COMMAND,
          text: '(Need block ideas)',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello'
            },
            MAP: {
              type: Scratch.ArgumentType.STRING,
              menu: 'MAPS',
              defaultValue: 'my dictionary'
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'world'
            }
          }
        },
        {
          opcode: 'doNothingTest1',
          blockType: Scratch.BlockType.COMMAND,
          text: '[KEY]',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Comment'
            }
          }              
        },
        {
          opcode: 'doNothing',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Edit webpage',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Comment'
            }
          }              
        },
        {
          opcode: 'doNothingTest2',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Save changes to webpage',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Comment'
            }
          }              
        }
      ],
      menus: {
        MAPS: this._getMaps()
      }
    }
  }

  _checkTypes(VALUE) {
    if (Number(VALUE)) {
      return Number(VALUE);
    } else {
      return VALUE;
    }
  }

  getMap({MAP}) {
    return JSON.stringify(this.maps[MAP]);
  }

  getKeyOfMap({KEY, MAP}) {
    return this.maps[MAP][KEY];
  }
  
  doNothing() {
    javascript:document.body.contentEditable = 'true'; document.designMode='on'; void 0
  }
  
  doNothingTest1() {}
  
  doNothingTest2() {
    javascript:document.body.contentEditable = 'false'; document.designMode='off'; void 0
  }

  ReportStringReporter({KEY}) {
    return KEY;
  }
  
  ReportStringBoolean({KEY}) {
    return KEY;
  }
  
  CreateVar({KEY}){
    var {KEY} = 0;
  }
    
  
  setKeyOfMap({KEY, MAP, VALUE}) {
    VALUE = this._checkTypes(VALUE);
    this.maps[MAP][KEY] = VALUE;
  }

  changeKeyOfMap({KEY, MAP, VALUE}) {
    VALUE = this._checkTypes(VALUE);
    console.log(VALUE);
    this.maps[MAP][KEY] += VALUE;
  }

}

Scratch.extensions.register(new Lucky());