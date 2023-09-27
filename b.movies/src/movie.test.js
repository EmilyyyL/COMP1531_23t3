import { clear, movieAdd, movieEdit, moviesList } from './movie';

beforeEach(() => {
  clear();
});

describe('Test for movieAdd', () => {
  test('Test successful movieAdd', () => {
    expect(movieAdd('Barbie', 'Greta Gerwig')).toStrictEqual({movieId: expect.any(Number)})
  })
})

describe('test for movieEdit', () => {
  test('movieEdit run successfully', () => {
    expect(movieEdit(12353, "Barbie", 'Greta Gerwig')).toStrictEqual({});
  })
  test('movieEdit given an invalid id', () => {
    expect(movieEdit("hello world", "Barbie", "Greta Gerwig")).toStrictEqual({error: expect.any(String)})
  })
})

describe ('Test for movieList', () => {
  test('Test successful movieList', () => {
    expect(movieList()).toStrictEqual({movieId: expect.any(Number), title: expect.any(String), director: expect.any(String)});
  })
})

describe('test for movieEdit', () => {
  test('movieEdit run successfully', () => {
    expect(movieEdit(12353, "Barbie", 'Greta Gerwig')).toStrictEqual({});
  })

 

  test('movieEdit given an invalid id', () => {
    expect(movieEdit("hello world", "Barbie", "Greta Gerwig")).toStrictEqual({error: expect.any(String)})
  })
})

 

describe('Test for movieAdd', () => {
  test('movieAdd runs successfully', () => {
    expect(movieAdd('My life', 'Yashwanth Madan')).toStrictEqual({movieId: expect.any(Number)})
  })
  test('movieAdd given an invalid movie title', () => {
    expect(movieEdit(23023230431, 'Raphael Toledo')).toStrictEqual({error: expect.any(String)})
  })
  test('movieAdd given an invalid director name', () => {
    expect(movieEdit('My life', 33204)).toStrictEqual({error: expect.any(String)})
  })
})


describe('Test for moviesList', () => {
  test('moviesList runs as expected', () => {
    expect(moviesList()).toEqual(expect.arrayContaining([expect.object]))
  })
}) 

describe("Crunchie Test for movieEdit", () => {
  test("Test successful movieEdit", () => {
    let movieId = movieAdd("FakeBarbie", "John Cena");
    
    expect(movieEdit(movieId, "Barbie", "Greta Gerwig")).toStrictEqual({});
    expect(moviesList().toStrictEqual({
      movies:
      [
        {
          movieId: movieId,
          title: "Barbie",
          director: "Greta Gerwig"
        }
      ]
    }));
  })
  test("Test error for movieEdit - id doesn't match", () => {
    let movieId = movieAdd("Oppenheimer", "Nolan");
    expect(movieEdit(movieId + 1, "Barbie","Gerwig")).toStrictEqual({error: expect.any(String)});
  })
})

describe('Test for movieAdd error and return value', () => {
  test('Empty title string', () => {
  expect(movieAdd('', 'Greta Gerwig').toStrictEqual({error: expect.any(String)}))
  })
  test('Empty director string ', () => {
    expect(movieAdd('Barbie', '').toStrictEqual({error: expect.any(String)}))
  })
  test('', () => {
    expect(movieAdd('','')).toStrictEqual({error: expect.any(String)})
  })
})

 

describe('Test for movieEdit error and return value', () => {
  test('movieId does not refer to an existing movie', () => {
    expect(movieEdit('', 'Inception', 'C Nolan').toStrictEqual({error: expect.any(String)} ))
  })
})

 

  
describe('Test for movieList, including behaviour/side-effects for movieAdd and movieEdit', () => {
  test('', () => {
    // Check for movieAdd
    movieAdd('Barbie', 'Greta Gerwig');
    movieAdd('Titanic', 'James Cameron');
    
    const movies = moviesList();
    expect(movies.length).toStrictEqual(2); 
    expect(movies[0].title).toStrictEqual('Barbie');  
    expect(movies[1].title).toStrictEqual('Barbie');
  

    // Check for movieEdit
    movieEdit()
  })


   
})