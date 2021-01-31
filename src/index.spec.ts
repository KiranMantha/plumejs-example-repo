import { TestBed } from '@plumejs/core';
import { AppComponent } from './index';

describe("@plumejs/core Component", () => {
  let appRoot:any;

  beforeAll(async() => {
    appRoot = await TestBed.MockComponent(AppComponent);
  });
  
  it('translation should return "Hello World"', () => {
    //expect('username.greet'.translate({name: 'Hello World'})).toBe("my name is Hello World");
    const h1:any = appRoot.querySelector('h1');
    expect(h1.innerHTML).toBe("Hello world");
  });

  afterAll(()=>{
    TestBed.RemoveComponent(appRoot);
  })
});