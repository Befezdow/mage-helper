import { Observable, of } from 'rxjs';

export class SpellsApiMockup {
  public static getSpellsList(): Observable<any> {
    return of([
      {
        id: '81385f63-31aa-44ee-bfdb-5dd3f61bdff3',
        name: 'Fireball',
        description: 'Simple fireball which can burn your enemies',
        power: 10,
        neededMana: 100,
        neededSchoolLevel: 2,
        magicSchool: {
          id: '6b3ac388-005a-43e5-959b-df179e95fdf5',
          name: 'Fire',
          description: 'Fire magic'
        }
      },
      {
        id: '3ca12691-2bfc-4c4c-bc26-09cbc404d7da',
        name: 'Ice arrow',
        description: 'Ice arrow which can freeze your enemies',
        power: 8,
        neededMana: 100,
        neededSchoolLevel: 1,
        magicSchool: {
          id: '484038d7-252a-4e92-a4e6-e4adbc456ee9',
          name: 'Water',
          description: 'Water magic'
        }
      }
    ]);
  }

  public static getMagicSchoolsList(): Observable<any> {
    return of([
      {
        id: '474c76bb-5dba-4822-bd7e-b1679b9b2f33',
        name: 'Earth',
        description: 'Earth magic'
      },
      {
        id: '484038d7-252a-4e92-a4e6-e4adbc456ee9',
        name: 'Water',
        description: 'Water magic'
      },
      {
        id: '6b3ac388-005a-43e5-959b-df179e95fdf5',
        name: 'Fire',
        description: 'Fire magic'
      },
      {
        id: 'b450ac8a-f45c-4bab-8cc1-f3d25e288928',
        name: 'Air',
        description: 'Air magic'
      }
    ]);
  }
}
