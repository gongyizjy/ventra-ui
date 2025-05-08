// import { useState } from 'react'
import { Button } from "ventra-ui";

import "./App.css";

function App() {
  return (
    <>
      <Button type="primary" size="large">
        测试
      </Button>
      <Button type="default" disabled>
        测试
      </Button>
      <Button type="dashed" size="small">
        测试
      </Button>
      <Button type="text" size="large">
        测试
      </Button>
      <Button type="link" size="large">
        测试
      </Button>
    </>
  );
}

export default App;
