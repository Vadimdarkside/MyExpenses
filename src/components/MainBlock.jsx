import WinterTheme from "./Theme/WinterTheme.module.css";
export default function MainBlock({ children, theme }) {
  const classes = `h-screen bg-slate-400 grow ${
    theme == "winter" ? WinterTheme.GoslingWinter : null
  }`;
  return <div className={classes}>{children}</div>;
}
