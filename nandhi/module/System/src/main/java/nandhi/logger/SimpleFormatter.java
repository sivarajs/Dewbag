package nandhi.logger;

import java.util.logging.Formatter;
import java.util.logging.LogRecord;

import nandhi.lang.JavaException;
import nandhi.sys.OS;
import nandhi.sys.SystemDate;

public class SimpleFormatter extends Formatter {

  @Override
  public String format(LogRecord record) {

    StringBuilder builder = new StringBuilder();
    builder.append(SystemDate.toDateString(record.getMillis()))
           .append(" ");
    builder.append(record.getLevel())
           .append(" ");
    builder.append(record.getMessage());

    if (record.getThrown() != null) {
      builder.append(OS.NEW_LINE);
      builder.append(JavaException.toString(record.getThrown()));
    }

    builder.append(OS.NEW_LINE);

    return builder.toString();
  }
}
