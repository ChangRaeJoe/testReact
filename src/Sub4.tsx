import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import "@xterm/xterm/css/xterm.css";
import { useEffect, useRef } from "react";

export function Sub4() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current == null) return;

    const terminal = new Terminal();
    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);

    terminal.open(boxRef.current);
    fitAddon.fit();

    terminal.focus();
    terminal.writeln("hello");

    let cursor = 0;
    let input = "";
    terminal.onKey((data) => {
      const code = data.key.charCodeAt(0);
      if (code == 27) {
        switch (data.key.substring(1)) {
          case "[C": //right
            terminal.write(data.key);
            cursor += 1;
            break;
          case "[D":
            terminal.write(data.key);
            cursor -= 1;
            break;
        }
      } else if (code == 13) {
        terminal.writeln("");
        input = "";
        cursor = 0;
      } else if (code < 32) return;
      else if (code == 127) {
        terminal.write("\b \b");
        cursor -= 1;
        input = input.substring(0, cursor) + input.substring(cursor + 1);
        console.log(
          input.substring(0, cursor),
          "\n",
          input.substring(cursor + 1),
        );
      } else {
        terminal.write(data.key);
        input = input.substring(0, cursor) + data.key + input.substring(cursor);
        cursor += 1;
      }
    });

    return () => {
      terminal.dispose();
    };
  }, []);
  return (
    <div>
      <p>Sub4</p>
      <div style={{ textAlign: "left" }} ref={boxRef}></div>
    </div>
  );
}
