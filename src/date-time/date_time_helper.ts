import * as moment from 'moment-timezone';
import { DATE_TIME } from './constant';

export class DateTimeHelper {
  static convertToUtc(dateTime: string, format = '') {
    return moment(dateTime).utc().format(format);
  }

  static convertDateToDateByTimeZone(date: string, utcOffset: string, format = '') {
    return moment(date).utcOffset(utcOffset).format(format);
  }

  static startOfDay(date: string) {
    return moment(date).tz(DATE_TIME.TIMEZONE.GMT7).startOf('day').utc();
  }

  static endOfDay(date: string) {
    return moment(date).tz(DATE_TIME.TIMEZONE.GMT7).endOf('day').utc();
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
    return moment().tz(DATE_TIME.TIMEZONE.GMT7).format(DATE_TIME.DATE_FORMAT.DATE);
  }
}
