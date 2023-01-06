const words = ['Lorem','ipsum','dolor','sit','amet','consectetur','adipiscing','elit','Vivamus','aliquam','felis','in','turpis','blandit','sit','amet','posuere','turpis','malesuada','Fusce','quis','tempus','quam','vel','faucibus','lacus','Aliquam','erat','volutpat','Sed','gravida','vehicula','iaculis','Integer','sollicitudin','viverra','blandit','Aenean','fermentum','leo','non','mattis','dictum','purus','est','iaculis','sem','luctus','facilisis','justo']

function getRandomWord(): string {
    const index = Math.floor(Math.random() * words.length)
    const word = words[index]
    return word
}

export default getRandomWord