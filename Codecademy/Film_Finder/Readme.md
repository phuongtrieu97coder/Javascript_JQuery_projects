![image](https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=html5) ![image](https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=css3) ![image](https://img.shields.io/badge/Bootstrap-white?style=for-the-badge&logo=bootstrap) ![image](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript) ![image](https://img.shields.io/badge/jQuery-black?style=for-the-badge&logo=jquery) ![image](https://img.shields.io/badge/JSON-black?style=for-the-badge&logo=json) ![image](https://img.shields.io/badge/SASS-white?style=for-the-badge&logo=sass)

![image](https://user-images.githubusercontent.com/82598726/181831477-61e5dc01-279c-4a06-b961-589c6d757d4e.png) ![image](https://user-images.githubusercontent.com/82598726/181831517-b7707a20-1524-41cd-ac9f-297c655f32ea.png)

<a type="button" title="Codecademy_Learn_JavaScript_Course_button" href="https://www.codecademy.com/courses/learn-intermediate-javascript/projects/js-film-finder" target="_blank" data-CodecademyLearnJavascriptCourseButt="CodecademyLearnJavascriptCourseButt_data"><img src="https://user-images.githubusercontent.com/82598726/175697552-f960b057-9e97-4c3e-a3e2-f2b5f7876de9.png" alt="Codecademy_Learn_JavaScript_Course_button" width="400px" height="300px"></a>

<br><br>

# Film Finder
<br>

# 1. Introduction:
![Alt text](image.png)
![Alt text](image-1.png)
![Alt text](image-2.png)
<br>
<br>

# 2. Output:
![Alt text](image-30.png)
![Alt text](image-31.png)
![Alt text](image-32.png)
![Alt text](image-33.png)
![Alt text](image-34.png)
![Alt text](image-35.png)
![Alt text](image-36.png)

<br>
<br>

# 3. Prompts:
![Alt text](image-3.png)
![Alt text](image-4.png)


![Alt text](image-5.png)
![Alt text](image-6.png)


![Alt text](image-7.png)
![Alt text](image-8.png)


![Alt text](image-9.png)
![Alt text](image-10.png)


![Alt text](image-11.png)
```js
if(response.ok){
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const genres = jsonResponse.genres;
      console.log(genres);
      return genres;
}
```
![Alt text](image-28.png)
![Alt text](image-29.png)

![Alt text](image-12.png)
```js
const discoverMovieEndpoint = "/discover/movie";
```
![Alt text](image-13.png)
![Alt text](image-14.png)

![Alt text](image-15.png)
![Alt text](image-16.png)


![Alt text](image-17.png)
```js
if(response.ok){
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const movies = jsonResponse.results;
      console.log(movies);
      return movies;
}
```
![Alt text](image-18.png)
```js
const movieEndpoint = `/movie/${movieId}`;
```
![Alt text](image-19.png)
![Alt text](image-20.png)


![Alt text](image-21.png)
```js
 if(response.ok){
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const movieInfo = jsonResponse;
      console.log(movieInfo);
      return movieInfo;
}
```
![Alt text](image-22.png)
![Alt text](image-23.png)
![Alt text](image-24.png)
![Alt text](image-25.png)

