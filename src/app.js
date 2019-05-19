// lodash
import _ from 'lodash';

// Click, Here 컴포넌트
const comp = () => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Click', 'Here !'], ' ');
    element.className = 'comp';

    document.addEventListener("click",function(event) {
        if (event.target.matches('.comp')) {
            alert('It\'s working !');
        }   
        
    }, false);

    return element;
};

// 문서에 컴포넌트 삽입
document.addEventListener("DOMContentLoaded", function(event) {
    document.body.appendChild(comp());
});

// css 임포트
import './import.css';