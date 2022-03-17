// ---------------------- задача 1 ---------------------

function parseCount(x) {
	const parsed = Number.parseInt(x);
	if (isNaN(parsed)) {
		throw new Error('Невалидное значение');
	} else {
		return parsed;
	}
}

function validateCount(y) {
	try {
		return parseCount(y);
	}
	catch (err) {
		return err
	}
}

// ---------------------- задача 2 ---------------------

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if (this.a + this.b <= this.c || this.b + this.c <= this.a || this.a + this.c <= this.b) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	getPerimeter() {
		return this.a + this.b + this.c
	}

	getArea() {
		let p = (this.a + this.b + this.c) * 0.5;
		return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
	}

}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	}
	catch (err) {
		return {
			getPerimeter: function () {
				return 'Ошибка! Треугольник не существует'
			}, getArea: function () {
				return 'Ошибка! Треугольник не существует'
			}
		}
	}
}
