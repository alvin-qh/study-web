import { Button, Icon, InputGroup, Intent } from '@blueprintjs/core';
import { Popover2, Tooltip2 } from '@blueprintjs/popover2';
import { range } from 'lodash';
import { HTMLAttributes, useRef, useState } from 'react';

interface NumberListProp extends HTMLAttributes<HTMLUListElement> {
  count: number;
}

/**
 * 通过在 JSX 中嵌入 JSX 元素数组，进行循环渲染
 */
const NumberList = ({ count, ...props }: NumberListProp): JSX.Element => {
  return (<ul {...props}>
    {
      // 通过 Array.map 将数字数组转换为 JSX 元素数组
      range(10).map(n => (
        <li key={n} className="inline-block px-4 py-2 rounded-md border border-gray-300">
          <a href="#!" onClick={e => e.preventDefault()}>{`${n + 1}`}</a>
        </li>
      ))
    }
  </ul>);
}

const WordList = (props: { className: string }): JSX.Element => {
  const [words, setWords] = useState([] as string[]);

  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * 返回一个 JSX 元素的数组，作为循环渲染结果
   */
  const createListItem = (): JSX.Element[] => {
    const wordList: JSX.Element[] = [];

    // 遍历 words 数组
    for (const [n, word] of words.entries()) {
      // 将 JSX 元素存入数组
      wordList.push(
        <li key={`${n}:${word}`} className="text-blue-600">
          <Icon icon="bookmark" />
          <Popover2
            interactionKind="hover"
            modifiers={{
              preventOverflow: {
                enabled: true
              }
            }}
            content={(
              <div>
                <Button
                  className="focus:outline-none"
                  intent={Intent.DANGER}
                  minimal={true}
                  icon="delete"
                  onClick={() => {
                    // 从 words state 中删除下标为 n 的项目，引发循环渲染
                    const newWord = words.slice()
                    newWord.splice(n, 1)
                    setWords(newWord);
                  }} />
              </div>
            )}
          >
            <span className="px-2">{word}</span>
          </Popover2>
        </li>
      );
    }
    return wordList;
  }

  return (
    <div>
      <InputGroup
        {...props}
        inputRef={inputRef}
        asyncControl={true}
        large={true}
        leftIcon="sort"
        rightElement={(
          <Tooltip2
            content="Click to add text"
          >
            <Button
              className="focus:outline-none"
              icon="add"
              minimal={true}
              intent={Intent.PRIMARY}
              onClick={() => {
                if (inputRef.current?.value) {
                  // 向 words state 中增加一个字符串项目，引发循环渲染
                  setWords([...words, inputRef.current?.value || ""])
                }
              }}
            />
          </Tooltip2>
        )}
        placeholder="输入字符串"
      />
      <ul className="px-2 py-4 space-y-2">
        {createListItem()}
      </ul>
    </div>
  );
}


const BasicLoop = (): JSX.Element => {
  return (
    <>
      <div className="py-4 px-6">
        <div>The list from 'range(10)': </div>
        <div className="px-2">
          <NumberList count={10} className="mt-4 space-x-2" />
        </div>
      </div>
      <div className="py-4 px-6">
        <div>The dynamic list: </div>
        <div className="px-2">
          <div className="mt-4 w-1/4">
            <WordList className="mt-4" />
          </div>
        </div>
      </div>
    </>
  );
}


export default BasicLoop;
