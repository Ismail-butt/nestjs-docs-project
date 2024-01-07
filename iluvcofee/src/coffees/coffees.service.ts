import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffess: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffess;
  }

  findOne(id: string) {
    return this.coffess.find((item) => item.id === +id);
  }

  create(createCoffeeDto: any) {
    this.coffess.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffess.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffess.splice(coffeeIndex, 1);
    }
  }
}
