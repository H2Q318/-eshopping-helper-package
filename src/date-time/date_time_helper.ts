import * as moment from 'moment-timezone';
import { DateTime } from './constant';

export class DateTimeHelper {
  static convertToUtc(dateTime: string, format = '') {
    return moment(dateTime).utc().format(format);
  }

  static convertDateToDateByTimeZone(date: string, utcOffset: string, format = '') {
    return moment(date).utcOffset(utcOffset).format(format);
  }

  static startOfDay(date: string) {
    return moment(date).tz(DateTime.TIMEZONE.GMT7).startOf('day').utc();
  }

  static endOfDay(date: string) {
    return moment(date).tz(DateTime.TIMEZONE.GMT7).endOf('day').utc();
  }

  static startOfToday() {
    const todayString = this.getTodayString();
    return this.startOfDay(todayString);
  }

  static endOfToday() {
    const todayString = this.getTodayString();
    return this.endOfDay(todayString);
  }

  static getTodayString() {
    return moment().tz(DateTime.TIMEZONE.GMT7).format(DateTime.DATE_FORMAT.DATE);
  }
}
