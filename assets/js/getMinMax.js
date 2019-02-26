/**
 * Напишите функцию getMinMax(input), принимающую строку input,
 * и ищущую в ней максимальное и минимальное числа.
 *
 * Числа в строке выделяются пробелами или знаками препинания.
 *
 * Пример:
 * getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028');
 * //{ min: -1028, max: 15 }
 *
 * getMinMax('"To Infinity and beyond", - repeated Buzz Lightyear 4 times in a row')
 * //{ max: Infinity, min: 4 }
 *
 * @param  {string} input входная строка
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 */
function getMinMax(input) {

    var arr = input.split(" , ");
    for (let i = 0; i < arr.length; i++)
    {
    arr[i] = parseFloat(arr[i]);
    if (Number.isNaN(arr[i])) arr[i] = nol;
    }
    var min = 1000, max = 1000;
    for (let i = 0; i < arr.length; i++)
    {
    if (arr[i] != nol)
    {
    if (arr[i]<min) min = arr[i];
    if (arr[i]>max) max = arr[i];
    }
    console.log(arr1);
    for (let i = 0; i < arr.length; i++)
    {
    
    }
    
    
    }
    






}
