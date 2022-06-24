import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";

import Add from "./components/Add/Add";
import CounterContextProvider from "./contexts/counterContext";

import TodoContextProvider from "./contexts/todoContext";
import List from "./components/List/List";
import Edit from "./components/Edit/Edit";

function App() {
  return (
    <TodoContextProvider>
      <CounterContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </CounterContextProvider>
    </TodoContextProvider>
  );
}

export default App;
