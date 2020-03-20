const throwIfMissing =() => {throw new Error('Missin')}
const func = (requiredParam = throwIfMissing())=> console.log(requiredParam)
func()