const share = document.querySelectorAll('.btn');


share.forEach((el) => {
  console.log(el); 
  el.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 172 172" style=" fill:#000000;"><g transform=""><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M86,10.75c-2.70849,0 -5.35401,0.98682 -7.39062,3.02344l-15.11719,15.28516c-0.81885,0.44092 -1.51172,1.0708 -2.01562,1.84766l-47.70312,47.70313c-4.07324,4.05224 -4.07324,10.70801 0,14.78125l64.83594,64.83594c4.07324,4.05224 10.70801,4.05224 14.78125,0l64.83594,-64.83594c4.07324,-4.05224 4.07324,-10.70801 0,-14.78125l-64.83594,-64.83594c-2.03662,-2.03662 -4.68213,-3.02344 -7.39062,-3.02344zM86,21.66797l64.33203,64.33203l-64.33203,64.33203l-64.33203,-64.33203l44.51172,-44.51172l9.40625,9.40625c-0.25195,0.90283 -0.33594,1.86865 -0.33594,2.85547c0,3.96826 2.1626,7.36963 5.375,9.23828v46.02344c-3.2124,1.86865 -5.375,5.27002 -5.375,9.23828c0,5.9419 4.8081,10.75 10.75,10.75c5.9419,0 10.75,-4.8081 10.75,-10.75c0,-3.96826 -2.1626,-7.36963 -5.375,-9.23828v-42.16016l16.46094,16.46094c-0.23096,0.86084 -0.33594,1.76367 -0.33594,2.6875c0,5.9419 4.8081,10.75 10.75,10.75c5.9419,0 10.75,-4.8081 10.75,-10.75c0,-5.9419 -4.8081,-10.75 -10.75,-10.75c-0.92383,0 -1.82666,0.10498 -2.6875,0.33594l-19.14844,-19.14844c0.23096,-0.86084 0.33594,-1.76367 0.33594,-2.6875c0,-5.9419 -4.8081,-10.75 -10.75,-10.75c-0.98682,0 -1.95264,0.08398 -2.85547,0.33594l-9.40625,-9.40625z"></path></g></g></g></svg>'
  el.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 16 16" style=" fill:#000000;"><path d="M 12.03125 2.023438 C 11.535156 2.023438 11.066406 2.269531 10.675781 2.65625 L 2.5625 10.726563 L 1.207031 14.785156 L 5.265625 13.433594 L 5.351563 13.351563 L 13.386719 5.367188 C 13.773438 4.976563 14.015625 4.507813 14.015625 4.011719 C 14.015625 3.515625 13.773438 3.046875 13.386719 2.65625 C 12.996094 2.269531 12.527344 2.023438 12.03125 2.023438 Z M 10.027344 4.710938 L 11.320313 6.007813 L 4.726563 12.5625 L 2.789063 13.207031 L 3.4375 11.265625 Z"></path></svg>'
  el.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 16 16" style=" fill:#000000;"><path d="M 6.496094 1 C 5.675781 1 5 1.675781 5 2.496094 L 5 3 L 2 3 L 2 4 L 3 4 L 3 12.5 C 3 13.324219 3.675781 14 4.5 14 L 10.5 14 C 11.324219 14 12 13.324219 12 12.5 L 12 4 L 13 4 L 13 3 L 10 3 L 10 2.496094 C 10 1.675781 9.324219 1 8.503906 1 Z M 6.496094 2 L 8.503906 2 C 8.785156 2 9 2.214844 9 2.496094 L 9 3 L 6 3 L 6 2.496094 C 6 2.214844 6.214844 2 6.496094 2 Z M 4 4 L 11 4 L 11 12.5 C 11 12.78125 10.78125 13 10.5 13 L 4.5 13 C 4.21875 13 4 12.78125 4 12.5 Z M 5 5 L 5 12 L 6 12 L 6 5 Z M 7 5 L 7 12 L 8 12 L 8 5 Z M 9 5 L 9 12 L 10 12 L 10 5 Z"></path></svg>'
});