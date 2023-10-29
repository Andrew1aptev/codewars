function likes(names){
    if(names.length === 0){
        return 'no one like this'
    }
    if(names.length === 1){
        return `${names[0]} likes this`
    }
    if(names.length === 2){
        return `${names[0]} and ${names[1]} like this`
    }
    if(names.length === 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    if(names.length >= 4){
        let usersQuantity = names.length - 2;
        return `${names[0]}, ${names[1]} and ${usersQuantity} others like this`
    }
}

console.log(likes(['Andrew','Mark','Max','Max','Max','Max','Max','Max','Max']));

// Мне нужно вернуть Первый, второй, третий элемент массива, если элементов больше четырех, то мы начинаем считать сколько
// еще осталось имен

/**
 * 1.
 */