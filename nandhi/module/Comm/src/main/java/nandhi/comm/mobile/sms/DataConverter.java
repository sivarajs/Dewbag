package nandhi.comm.mobile.sms;

class DataConverter {

  public static final int CHARSET_GSM7BIT = 1;

  private static final String ALPHABET =
      "@£$\u00A5\u00E8\u00E9\u00F9\u00EC\u00F2\u00C7\n\u00D8\u00F8\r\u00C5\u00E5ƒ_÷√ÀŸ–ÿ”»Œ@\u00C6\u00E6\u00DF\u00C9 !\"#\u00A4%&\'()*+,-./0123456789:;<=>?\u00A1ABCDEFGHIJKLMNOPQRSTUVWXYZ\u00C4\u00D6\u00D1\u00DCß\u00BFabcdefghijklmnopqrstuvwxyz\u00E4\u00F6\u00F1\u00FC\u00E0";

  public static String charToHex(char character, int charSet) {
    switch (charSet) {
      case CHARSET_GSM7BIT :
        int length = ALPHABET.length();
        for (int i = 0; i < length; i++) {
          if (ALPHABET.charAt(i) == character) {
            return (i <= 15 ? "0" + Integer.toHexString(i) : Integer
                .toHexString(i));
          }
        }
        break;
    }
    return (Integer.toHexString((int) character).length() < 2)
        ? "0" + Integer.toHexString((int) character)
          : Integer.toHexString((int) character);
  }

  public static char hexToChar(int index, int charSet) {
    switch (charSet) {
      case CHARSET_GSM7BIT :
        if (index < ALPHABET.length()) {
          return ALPHABET.charAt(index);
        }
    }
    return '?';
  }

  public static char hexToExtChar(int ch, int charSet) {
    switch (charSet) {
      case CHARSET_GSM7BIT :
        switch (ch) {
          case 10 :
            return '\f';
          case 20 :
            return '^';
          case 40 :
            return '{';
          case 41 :
            return '}';
          case 47 :
            return '\\';
          case 60 :
            return '[';
          case 61 :
            return '~';
          case 62 :
            return ']';
          case 64 :
            return '|';
          case 101 :
            return '\u20AC';
          default:
            return '?';
        }
      default:
        return '?';
    }
  }

  public static String textToHex(String text, int charSet) {
    String outText = "";
    int length = text.length();
    for (int i=0; i<length; i++) {
      switch (text.charAt(i)) {
        case '¡' :
        case '·' :
        case '‹' :
          outText = outText + charToHex('A', charSet);
          break;
        case '¬' :
        case '‚' :
          outText = outText + charToHex('B', charSet);
          break;
        case '√' :
        case '„' :
          outText = outText + charToHex('√', charSet);
          break;
        case 'ƒ' :
        case '‰' :
          outText = outText + charToHex('ƒ', charSet);
          break;
        case '≈' :
        case 'Â' :
        case '›' :
          outText = outText + charToHex('E', charSet);
          break;
        case '∆' :
        case 'Ê' :
          outText = outText + charToHex('Z', charSet);
          break;
        case '«' :
        case 'Á' :
        case 'ﬁ' :
          outText = outText + charToHex('H', charSet);
          break;
        case '»' :
        case 'Ë' :
          outText = outText + charToHex('»', charSet);
          break;
        case '…' :
        case 'È' :
        case 'ﬂ' :
          outText = outText + charToHex('I', charSet);
          break;
        case ' ' :
        case 'Í' :
          outText = outText + charToHex('K', charSet);
          break;
        case 'À' :
        case 'Î' :
          outText = outText + charToHex('À', charSet);
          break;
        case 'Ã' :
        case 'Ï' :
          outText = outText + charToHex('M', charSet);
          break;
        case 'Õ' :
        case 'Ì' :
          outText = outText + charToHex('N', charSet);
          break;
        case 'Œ' :
        case 'Ó' :
          outText = outText + charToHex('Œ', charSet);
          break;
        case 'œ' :
        case 'Ô' :
        case '¸' :
          outText = outText + charToHex('O', charSet);
          break;
        case '–' :
        case '' :
          outText = outText + charToHex('–', charSet);
          break;
        case '—' :
        case 'Ò' :
          outText = outText + charToHex('P', charSet);
          break;
        case '”' :
        case 'Û' :
        case 'Ú' :
          outText = outText + charToHex('”', charSet);
          break;
        case '‘' :
        case 'Ù' :
          outText = outText + charToHex('T', charSet);
          break;
        case '’' :
        case 'ı' :
        case '˝' :
          outText = outText + charToHex('Y', charSet);
          break;
        case '÷' :
        case 'ˆ' :
          outText = outText + charToHex('÷', charSet);
          break;
        case '◊' :
        case '˜' :
          outText = outText + charToHex('X', charSet);
          break;
        case 'ÿ' :
        case '¯' :
          outText = outText + charToHex('ÿ', charSet);
          break;
        case 'Ÿ' :
        case '˘' :
        case '˛' :
          outText = outText + charToHex('Ÿ', charSet);
          break;
        case '\f' :
          outText = outText + Integer.toHexString(27) + Integer.toHexString(10);
          break;
        case '^' :
          outText = outText + Integer.toHexString(27) + Integer.toHexString(20);
          break;
        case '{' :
          outText = outText + Integer.toHexString(27) + Integer.toHexString(40);
          break;
        case '}' :
          outText = outText + Integer.toHexString(27) + Integer.toHexString(41);
          break;
        case '\\' :
          outText = outText + Integer.toHexString(27) + Integer.toHexString(47);
          break;
        case '[' :
          outText = outText + Integer.toHexString(27) + Integer.toHexString(60);
          break;
        case '~' :
          outText = outText + Integer.toHexString(27) + Integer.toHexString(61);
          break;
        case ']' :
          outText = outText + Integer.toHexString(27) + Integer.toHexString(62);
          break;
        case '|' :
          outText = outText + Integer.toHexString(27) + Integer.toHexString(64);
          break;
        case '\u20AC' :
          outText =
              outText + Integer.toHexString(27) + Integer.toHexString(101);
          break;
        default:
          outText = outText + charToHex(text.charAt(i), charSet);
          break;
      }
    }
    return outText;
  }

  public static String hexToText(String text, int charSet) {
    String outText = "";
    int length = text.length();
    
    for (int i=0; i<length; i+=2) {
      String hexChar = "" + text.charAt(i) + text.charAt(i + 1);
      int c = Integer.parseInt(hexChar, 16);
      if (c == 27) {
        i++;
        outText = outText + hexToExtChar((char) c, charSet);
      }
      else {
        outText = outText + hexToChar((char) c, charSet);
      }
    }
    return outText;
  }
}
