import { projects } from "./projects";

const commands: Map<string, string> = new Map<string, string>();

commands.set("motd", motdText());
commands.set("whoami", "root");
commands.set("touch", "Why would you touch anything?");
commands.set("rm", "Why would you remove anything?");
commands.set("about", aboutText());
commands.set("date", new Date().toLocaleString());
commands.set("projects", projectsText());
commands.set("kali", kaliLogo());
commands.set("github", openLink("https://github.com/parnojaaxel"));
commands.set("repo", openLink("https://github.com/parnojaaxel"));
commands.set("email", openLink("mailto:parnoja.axel@gmail.com"));
commands.set(
  "socials",
  "Usage: [command]<br><br>github, email"
);
commands.set("help", helpText());

export const getCommandByName = (name: string): string => {
  name = name.trim().toLowerCase().split(" ")[0];

  switch (name) {
    case "github":
      window.open("https://github.com/parnojaaxel", "_blank");
      break;
    case "repo":
      window.open("https://github.com/parnojaaxel/", "_blank");
      break;
    case "email":
      window.open("mailto:parnoja.axel@gmail.com", "_blank");
      break;
  }

  return commands.get(name) ?? `${name}: command not found`;
};

export const getCommandNames = (): string[] => {
  const commandNames: string[] = ["clear"];
  for (const entry of Array.from(commands.entries())) {
    commandNames.push(entry[0]);
  }

  return commandNames.sort();
};

export function motdText(): string {
  return `
    Welcome to 0l1v3rr.github.io!<br>

    <br>&nbsp;* GitHub: 
    <a class="terminal-link" href="https://github.com/parnojaaxel" target="_blank" rel="noreferrer">
      https://github.com/parnojaaxel
    </a>

    <br>&nbsp;* Repo: 
    <a class="terminal-link" href="https://github.com/parnojaaxel" target="_blank" rel="noreferrer">
      https://github.com/parnojaaxel
    </a>

    <br>
    <br>&nbsp;* Type 'help' to see the list of available commands.
  `;
}

function helpText(): string {
  const commandNames: string[] = ["clear", "help"];
  for (const entry of Array.from(commands.entries())) {
    commandNames.push(entry[0]);
  }

  return `
    Usage: [command] [options]
    <br>
    <br>

    ${commandNames.sort().join(", ")}
  `;
}

function aboutText(): string {
  return `
    Hello, root!
    <br><br>

    Im Axel Pärnoja
    <span class="terminal-bold">Im a Full-Stack Developer</span> specializing in building high-quality web applications using the <span class="terminal-bold">React</span> ecosystem.<br><br>

    I have hands-on experience with <span class="terminal-bold">TypeScript</span>, 
    along with various open-source frameworks and libraries such as <span class="terminal-bold">React, Next.js, Tailwind, PHP, Express, and many more.</span><br><br>

    Would you like to connect with me? Enter the 'socials' command!<br>
    Want to take a look at my projects? 
    Enter the 'projects' command or visit my GitHub with the 'github' command!
  `;
}

function openLink(link: string): string {
  return `
    Redirecting to 
      <a class="terminal-link" href="${link}" target="_blank" rel="noreferrer">
        ${link}</a>...
    `;
}

function projectsText(): string {
  return `
    ${projects
      .map((project) => {
        return `
        <a 
          class="project-${project.category}"
          href="${project.link}"
          target="_blank"
          rel="noreferrer"
        >${project.name}</a>`;
      })
      .join("&nbsp;&nbsp;&nbsp;")}
  `;
}

function kaliLogo() {
  return `
    <span class="text-kali-blue flex flex-col">
      <span>${"..............".replaceAll(" ", "&nbsp;")}</span>
      <span>${"            ..,;:ccc,.".replaceAll(" ", "&nbsp;")}</span>
      <span>${"          ......''';lxO.".replaceAll(" ", "&nbsp;")}</span>
      <span>${".....''''..........,:ld;".replaceAll(" ", "&nbsp;")}</span>
      <span>${"           .';;;:::;,,.x,".replaceAll(" ", "&nbsp;")}</span>
      <span>${"      ..'''.            0Xxoc:,.  ...".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"  ....                ,ONkc;,;cokOdc',.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${" .                   OMo           ':ddo.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>

      <span>${"                    dMc               :OO;".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                    0M.                 .:o.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                    ;Wd".replaceAll(" ", "&nbsp;")}</span>
      <span>${"                     ;XO,".replaceAll(" ", "&nbsp;")}</span>
      <span>${"                       ,d0Odlc;,..".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                            ..',;:cdOOd::,.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                     .:d;.':;.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                        'd,  .'".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                          ;l   ..".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                           .o".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                             c".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                             .'".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                              .".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
    </span>
  `;
}
