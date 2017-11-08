import Promise from 'bluebird';
import fs from 'fs';
import path from 'path';

Promise.promisifyAll(fs);

export default class ApiCaller {
  static Call(apiUrl: string) {
    switch (apiUrl) {
      case 'https://api.github.com/users/heremaps/repos':
        return fs.readFileAsync(
          path.resolve(__dirname, '..', 'outputs', 'repos.txt'),
          'utf8'
        );
        break;
      case 'https://api.github.com/repos/heremaps/bike-navigation/languages':
        return fs.readFileAsync(
          path.resolve(__dirname, '..', 'outputs', 'repo_bike-navigation.txt'),
          'utf8'
        );
        break;
      default:
        return fs.readFileAsync(
          path.resolve(__dirname, '..', 'outputs', 'not-found.txt'),
          'utf8'
        );
        break;
    }
  }
}
