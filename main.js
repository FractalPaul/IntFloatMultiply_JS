for (let i = 1; i <= 5000; i++) {
    for (let j = 1.0; j <= 5000.0; j++) {
        let resultIntFloat = i * j;
        let resultIntInt = i * parseInt(j);

        if (resultIntFloat - resultIntInt != 0) {
            console.log(`Multiplying ${i} * ${j} = ${resultIntFloat}`);
        }
    }
}
