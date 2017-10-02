#!/bin/sh

### BEGIN INIT INFO
# Provides:          landing unionchc
# Required-Start:    $local_fs $remote_fs $network $syslog
# Required-Stop:     $local_fs $remote_fs $network $syslog
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: starts the landing service
# Description:       starts the landing service
### END INIT INFO

WORK_PATH="/data/unionchc/landing"
EXEC=/usr/bin/jsvc
JAVA_HOME=/usr/lib/jvm/java-8-oracle
CLASS_PATH=$WORK_PATH/target/landing.jar
CLASS=landing.server
USER=lexa
PID=$WORK_PATH/landing.pid
LOG_OUT=$WORK_PATH/logs/landing.out
LOG_ERR=$WORK_PATH/logs/landing.err

do_exec() {
  $EXEC -java-home $JAVA_HOME -jvm server -cp $CLASS_PATH -user $USER -outfile $LOG_OUT -errfile $LOG_ERR -pidfile $PID -cwd $WORK_PATH $1 $CLASS
}

case "$1" in
  start)
    do_exec
    ;;
  stop)
    do_exec "-stop"
    ;;
  restart)
    if [ -f "$PID"   ]; then
      do_exec "-stop"
      do_exec
    else
      echo "service not running, will do nothing"
      exit 1
    fi
    ;;
  *)
    echo "usage: daemon {start|stop|restart}" >&2

    exit 3
    ;;
esac

