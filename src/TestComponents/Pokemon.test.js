import { act, renderHook } from "@testing-library/react-hooks";
import {getByTestId, render} from '@testing-library/react'
//import { render } from "react-dom";
import { usePokemon } from "../componet/Pokemon";
import CallingData from "../componet/CallingData";

const getControlledPromise = () => {
  let containPromiseResult;
  const promise = new Promise((resolve, reject) => {
    containPromiseResult = { resolve, reject };
  });
  return { containPromiseResult, promise };
};

// describe("usePokemon", () => {
//   it("fetches pokemon by the url constructed from pokemonName", async () => {
//     global.fetch = jest.fn();

//     await act(async () => renderHook(() => usePokemon("pikachu")));

//     expect(global.fetch).toBeCalledWith(
//       "https://pokeapi.co/api/v2/pokemon/pikachu"
//     );
//   });
// });
//   describe("while fetching data", () => {
//     it("handles loading state correctly", async () => {
//       const { containPromiseResult, promise } = getControlledPromise();
   
//       global.fetch = jest.fn(() => promise);

//       const { result, waitForNextUpdate } = renderHook(usePokemon);

//       expect(result.current.isLoading).toBe(true);
//       containPromiseResult.resolve();

//       await waitForNextUpdate();
//       expect(result.current.isLoading).toBe(false);
//     });
//   });

  describe("when got data successfully", () => {
    it("handles successful state correctly", async () => {
      const { containPromiseResult, promise } = getControlledPromise();
      global.fetch = jest.fn(() => promise)

      const { result, waitForNextUpdate } = renderHook(usePokemon);
      
      containPromiseResult.resolve({json: () => ({pokemon: "ditto"})})

      await waitForNextUpdate()
     
      expect(result.current.pokemon).toStrictEqual({pokemon: "ditto"})
    
      expect(result.current.isLoading).toBe(false)
    });
  });

  describe("unmount data",()=>{
      it("handles unmount data",async()=>{
          await act(async()=>{
            const {unmount} = renderHook(usePokemon);
            return unmount
          })
         
          //return unmount

          //result.unm
      })
  })

//   describe("with an error during request", () => {
//     it("handles error state correctly", async () => {
//       global.fetch = jest.fn(() => {
//         return new Promise(() => {
//           throw "Fetch error"
//         })
//       }) 

//       const { result, waitForNextUpdate } = renderHook(usePokemon);
//       await waitForNextUpdate()

//       expect(result.current.error).toStrictEqual("Fetch error")
//     });
//   });
