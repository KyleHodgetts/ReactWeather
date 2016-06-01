import React from 'react';

export default () => {
  return (
    <div className="text-center">
      <h1>About</h1>
      <blockquote>
        This weather application was built by Kyle Hodgetts while undertaking
        the <a target="_blank" href="https://www.udemy.com/the-complete-react-web-app-developer-course/">Complete React Developer Course</a> on Udemy.
      </blockquote>
      <table className="hover stack">
        <thead>
          <tr>
            <th width="200">Tech Used</th>
            <th>Why?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
                OpenWeatherMap API
            </td>
            <td>Provides weather information for location search terms.</td>
          </tr>
          <tr>
            <td>Facebook's React.js</td>
            <td>Stateful components.</td>
          </tr>
          <tr>
            <td>Webpack</td>
            <td>Bundle assets together to serve to the browser.</td>
          </tr>
          <tr>
            <td>Node</td>
            <td>Lightweight, efficient library for server side web apps.
               Non blocking, event driven I/O.</td>
          </tr>
          <tr>
            <td>NPM</td>
            <td>Package manager that comes packaged with node for installing JS modules.</td>
          </tr>
          <tr>
            <td>git</td>
            <td>Version control. Need I say more? I thought not.</td>
          </tr>
          <tr>
            <td>Github</td>
            <td>Remote repository for <a target="_blank" href="https://github.com/KyleHodgetts/ReactWeather"></a>project</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
