const getTagColor = (language: string) => {
    switch (language.toLocaleLowerCase()) {
      case "react":
        return "blue";
      case "javascript":
        return "yellow";
      case "typescript":
        return "blue";
      case "python":
        return "blue";
      case "php":
        return "purple";
      case "laravel":
        return "red";
      default:
        return "plum";
    }
  }

export { getTagColor };