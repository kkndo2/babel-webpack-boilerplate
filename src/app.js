// lodash
import _ from 'lodash';

// Click, Here 컴포넌트
const comp = () => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Click', 'Here !'], ' ');

    document.addEventListener("click", function(event) {
        alert('It\'s working !')
    });

    return element;
};

// 문서에 컴포넌트 삽입
document.addEventListener("DOMContentLoaded", function(event) {
    document.body.appendChild(comp());
});