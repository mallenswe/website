import { EmployeeService } from './employee.service';
import { PersonService } from './person.service';
import { WeatherForecastService } from './weather-forecast.service';
import { ColorChangerService } from './color-changer.service';


export const services: any[] = [EmployeeService, PersonService, ColorChangerService, WeatherForecastService];

export * from './employee.service';
export * from './person.service';
export * from './weather-forecast.service';
export * from './color-changer.service';