![image](https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=html5) ![image](https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=css3) ![image](https://img.shields.io/badge/Bootstrap-white?style=for-the-badge&logo=bootstrap) ![image](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript) ![image](https://img.shields.io/badge/jQuery-black?style=for-the-badge&logo=jquery) ![image](https://img.shields.io/badge/JSON-black?style=for-the-badge&logo=json) ![image](https://img.shields.io/badge/SASS-white?style=for-the-badge&logo=sass)

![image](https://user-images.githubusercontent.com/82598726/181831477-61e5dc01-279c-4a06-b961-589c6d757d4e.png) ![image](https://user-images.githubusercontent.com/82598726/181831517-b7707a20-1524-41cd-ac9f-297c655f32ea.png)

<a type="button" title="Codecademy_Learn_JavaScript_Course_button" href="https://www.codecademy.com/courses/learn-intermediate-javascript/projects/es6-modules-workaround" target="_blank" data-CodecademyLearnJavascriptCourseButt="CodecademyLearnJavascriptCourseButt_data"><img src="https://user-images.githubusercontent.com/82598726/175697552-f960b057-9e97-4c3e-a3e2-f2b5f7876de9.png" alt="Codecademy_Learn_JavaScript_Course_button" width="400px" height="300px"></a>

<br><br>

# WorkAround Explorer
<br>

# 1. Introduction:
![Alt text](image.png)
![Alt text](image-1.png)
![Alt text](image-2.png)
<br>
<br>

# 2. Output:
![Alt text](image-17.png)
![Alt text](image-18.png)
![Alt text](image-19.png)
> ## Data will change according to the selection of the user based on role and company.

<br>
<br>

# 3. Prompts:
![Alt text](image-3.png)
```js
export {getRoles,getCompanies,getDataByRole,getDataByCompany,salaryData as default};
```

![Alt text](image-4.png)
```js
import {getRoles,getCompanies} from "./modules/salaryData.js";
```


![Alt text](image-5.png)
```js
const companies = getCompanies();
const roles = getRoles();
```
![Alt text](image-6.png)
```js
 <script type="module" src="main.js" defer></script>
```
![Alt text](image-7.png)

![Alt text](image-8.png)
```js
import {getDataByRole,getDataByCompany} from "./salaryData.js";
import salaryData from "./salaryData.js";

```
![Alt text](image-9.png)
![Alt text](image-10.png)

```js
// Add your imports here.
import {getDataByRole,getDataByCompany} from "./salaryData.js";
import salaryData from "./salaryData.js";

// Replace the empty array with the appropriate imported function/value
const getAverageSalaryByRole = role => {
  const roleData = getDataByRole(role);
  const salariesOfRole = roleData.map(obj => obj.salary);
  return calculateAverage(salariesOfRole);
}

// Replace the empty array with the appropriate imported function/value
const getAverageSalaryByCompany = company => {
  const companyData = getDataByCompany(company);
  const salariesAtCompany = companyData.map(obj => obj.salary);
  return calculateAverage(salariesAtCompany);
}

// Replace the empty array with the appropriate imported function/value
const getSalaryAtCompany = (role, company) => {
  const companyData = getDataByCompany(company);
  const roleAtCompany = companyData.find(obj => obj.role === role);
  return roleAtCompany.salary;
}

// Replace the empty array with the appropriate imported function/value
const getIndustryAverageSalary = () => {
  const allSalaries = salaryData.map(obj => obj.salary);
  return calculateAverage(allSalaries);
}



// Helper Function. Do not edit.
// Note: This function does not need to be exported since it is only used by the functions contained within this module.
function calculateAverage(arrayOfNumbers) {
  let total = 0;
  arrayOfNumbers.forEach(number => total += number);
  return (total / arrayOfNumbers.length).toFixed(2);
}

export {getAverageSalaryByRole,getAverageSalaryByCompany,getSalaryAtCompany,getIndustryAverageSalary}

```

![Alt text](image-11.png)
```js
import {getAverageSalaryByRole,getAverageSalaryByCompany,getSalaryAtCompany,getIndustryAverageSalary} from "./modules/workAroundModule.js";

```

![Alt text](image-12.png)
![Alt text](image-13.png)
![Alt text](image-14.png)
![Alt text](image-15.png)
![Alt text](image-16.png)