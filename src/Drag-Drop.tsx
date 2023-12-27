import { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

export const DragDrop = () => {
  const [words, setWords] = useState(["P", "e", "r", "l"]);

  const [rod, setRod] = useState<number>();
  function onDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }
    console.log(result);
    result.destination.index === 2 && setRod(result.destination.index);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="word-item" direction="horizontal">
        {(provided) => {
          return (
            <div
              className="flex flex-col items-center justify-center px-2 bg-stone-900"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {words.map((spl, idx) => {
                return (
                  <Draggable
                    key={`${spl}-${idx}`}
                    draggableId={`${spl}-${idx}`}
                    index={idx}
                  >
                    {(p) => {
                      return (
                        <div
                          ref={p.innerRef}
                          {...p.draggableProps}
                          {...p.dragHandleProps}
                          style={{
                            ...p.draggableProps.style,
                          }}
                          className="text-white text-6xl font-bold flex items-start"
                        >
                          <p>{spl}</p>
                          {rod === idx && (
                            <div className="w-2 h-16 bg-blue-400 rounded-full"></div>
                          )}
                        </div>
                      );
                    }}
                  </Draggable>
                );
              })}
              {!rod && (
                <Draggable
                  draggableId={(words.length + 1).toString()}
                  index={words.length}
                >
                  {(provided) => (
                    <div
                      className="w-2 h-16 bg-blue-400 rounded-full"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    ></div>
                  )}
                </Draggable>
              )}

              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};
